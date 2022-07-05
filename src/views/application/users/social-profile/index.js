import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box,Modal, Button, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material';
// project imports
import Profile from '../account-profile/Profile1/Profile';
import ProfileEducation from '../account-profile/Profile1/ProfileEducation';
import ProfileEmployment from '../account-profile/Profile1/ProfileEmployment';
import ProfileCertfications from '../account-profile/Profile1/ProfileCertfications';
import ApplicationHistory from '../account-profile/Profile1/ApplicationHistory';
// import ProfileEmployment from '../account-profile/Profile1/ProfileEmployment';

import CertificateModal from './CertificateModal';
import useAuth from 'hooks/useAuth';
import useConfig from 'hooks/useConfig';
import Avatar from 'ui-component/extended/Avatar';
import Chip from 'ui-component/extended/Chip';
import MainCard from 'ui-component/cards/MainCard';
import ImagePlaceholder from 'ui-component/cards/Skeleton/ImagePlaceholder';
import { gridSpacing } from 'store/constant';
import { useLocation } from 'react-router-dom';
// assets
import { IconFriends, IconInbox, IconPhoto, IconUserPlus, IconUsers } from '@tabler/icons';
import User1 from 'assets/images/profile/img-user.png';
import Cover from 'assets/images/profile/img-profile-bg.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Context} from 'store/store/Store'
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box
                    sx={{
                        p: 0
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const tabOptions = [
    {
        to: '/user/account-profile/Profile1/profile',
        icon: <IconInbox stroke={1.5} size="1.1rem" />,
        label: 'Profile'

    },
    {
        to: '/user/account-profile/Profile1/profile-education',
        icon: <IconUsers stroke={1.5} size="1.1rem" />,
        label: 'Education'
    },
    {
        to: '/user/account-profile/Profile1/profile-employment',
        icon: <IconPhoto stroke={1.5} size="1.1rem" />,
        label: 'Cerifications'
    },
    {
        to: '/user/social-profile/friend-request',
        icon: <IconUserPlus stroke={1.5} size="1.1rem" />,
        label: 'Work History'
    },
    {
        to: '/user/social-profile/friends',
        icon: <IconFriends stroke={1.5} size="1.1rem" />,
        label: (
            <>
                Applications History <Chip label="100" size="small" chipcolor="secondary" sx={{ ml: 1.5 }} />
            </>
        )
    },
];

// ==============================|| SOCIAL PROFILE ||============================== //

const SocialProfile = () => {
    const theme = useTheme();
    const location = useLocation()
    const { url, user } = useAuth();
    const { borderRadius } = useConfig();
    const { tab } = useParams();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, dispatch] = useContext(Context);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/members`; 
      navigate(path);
    }

    let selectedTab = 0;
    switch (tab) {
        case 'profile':
            selectedTab = 1;
            break;
        case 'education':
            selectedTab = 2;
            break;
        case 'certifications':
            selectedTab = 3;
            break;
        case 'work-history':
            selectedTab = 4;
            break;
        case 'work-history':
            selectedTab = 4;
            break;
        case 'posts':
        default:
            selectedTab = 0;
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const [value, setValue] = React.useState(selectedTab);
    const [memberID, setMemberID] = React.useState();
    const [member, setMember] = React.useState();
    const [memberCertificate, setMemberCertificate] = React.useState();
    const [memberPracticeCertificate, setMemberPracticeCertificate] = React.useState();
    const [memberProfileImage, setMemberProfileImage] = React.useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        if (state != null ) {
            const { member } = state
            console.log('member profile')
            console.log(member)
            setMember(member)
            if (member) {
                console.log('state.member')
                console.log(state.member)
                if (state.member) {
                    setMemberProfileImage(url.concat(state.member.profile_picture))
                }
                setMemberCertificate(url.concat(member.registration_certificate_picture))
                console.log('url then memberCertificate')
                console.log(url)
                console.log(url.concat(member.registration_certificate_picture))
            }
            setLoading(false);
        }else {
            routeChange()
        }

    }, [location]);

    function generateCertificate () {
        if (member){
            fetch(`${url}/member/member-certificate-gen/${member.member_number}`)
            .then(response => response.json())
            .then(data => {
                console.log('data memberID')
                setMember(data)
                setMemberCertificate(url.concat(member.registration_certificate_picture))
                console.log('memberCertificate')
                console.log(memberCertificate)
            })
            .catch( error => console.log(error))
        }

    }
    function confirmPayment () {
        if (member){
        fetch(`${url}/member/member_confirm_payment/${member.member_number}`)
        .then(response => response.json())
        .then(data => {
            console.log('data memberID')
            setMember(data)
            console.log(data)
        })
        .catch( error => console.log(error))
    }
    }

 
    return (
        <Grid container spacing={gridSpacing}>
             
            <Grid item xs={12}>
                <MainCard
                    contentSX={{
                        p: 1.5,
                        paddingBottom: '0px !important',
                        [theme.breakpoints.down('lg')]: {
                            textAlign: 'center'
                        }
                    }}
                >
                    {isLoading ? (
                        <ImagePlaceholder
                            sx={{
                                borderRadius: `${borderRadius}px`,
                                overflow: 'hidden',
                                mb: 3,
                                height: { xs: 85, sm: 150, md: 260 }
                            }}
                        />
                    ) : (
                        <CardMedia component="img" image={Cover} sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', mb: 3 }} />

                    )}
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={3}>
                            {isLoading ? (
                                <ImagePlaceholder
                                    sx={{
                                        margin: '-70px 0 0 auto',
                                        borderRadius: '16px',
                                        [theme.breakpoints.down('lg')]: {
                                            margin: '-70px auto 0'
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            margin: '-60px auto 0'
                                        },
                                        width: { xs: 72, sm: 100, md: 140 },
                                        height: { xs: 72, sm: 100, md: 140 }
                                    }}
                                />
                            ) : (
                                <Avatar
                                    alt="User 1"
                                    src={memberProfileImage}
                                    sx={{
                                        margin: '-70px 0 0 auto',
                                        borderRadius: '16px',
                                        [theme.breakpoints.down('lg')]: {
                                            margin: '-70px auto 0'
                                        },
                                        [theme.breakpoints.down('md')]: {
                                            margin: '-60px auto 0'
                                        },
                                        width: { xs: 72, sm: 100, md: 140 },
                                        height: { xs: 72, sm: 100, md: 140 }
                                    }}
                                />
                            )}
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={gridSpacing}>
                            {member ?
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h5">{user?.name}</Typography>
                                    <Typography variant="subtitle2"> {member.first_name} {member.last_name}  </Typography>
                                </Grid>
                                :
                                <></>
                            }
                                <Grid item xs={12} md={8}>
                                    <Grid
                                        container
                                        spacing={1}
                                        sx={{
                                            justifyContent: 'flex-end',
                                            [theme.breakpoints.down('lg')]: {
                                                justifyContent: 'center'
                                            }
                                        }}
                                    >
                                        {member && member.payment_confirmed === true 
                                            ? 
                                            member.registration_certificate_picture 
                                            ?
                                            <Grid item>
                                            <CertificateModal memberCertificate={ memberCertificate} />
                                        </Grid>
                                            :

                                            <Grid item>
                                            <Button onClick={generateCertificate} variant="outlined">Generate Certificate</Button>
                                        </Grid>

                                             :
                                             <Grid item>
                                             <Button onClick={confirmPayment} variant="outlined">Confirm Payment</Button>
                                         </Grid>
                                         }
                                        {/* <Grid item>
                                            <Button variant="contained" startIcon={<PersonAddTwoToneIcon />}>
                                                Send Request
                                            </Button>
                                        </Grid> */}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Tabs
                                    value={value}
                                    variant="scrollable"
                                    onChange={handleChange}
                                    sx={{
                                        marginTop: 2.5,
                                        '& .MuiTabs-flexContainer': {
                                            border: 'none'
                                        },
                                        '& a': {
                                            minHeight: 'auto',
                                            minWidth: 10,
                                            py: 1.5,
                                            px: 1,
                                            mr: 2.25,
                                            color: 'grey.700',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        '& a.Mui-selected': {
                                            color: 'primary.main'
                                        },
                                        '& a > svg': {
                                            marginBottom: '4px !important',
                                            mr: 1.25
                                        }
                                    }}
                                >
                                    {tabOptions.map((option, index) => (
                                        <Tab
                                            key={index}
                                            component={Link}
                                            to="#"
                                            icon={option.icon}
                                            label={option.label}
                                            {...a11yProps(index)}
                                        />
                                    ))}
                                </Tabs>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <TabPanel value={value} index={0}>
                    <Profile member={member}  />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ProfileEducation member={member} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ProfileCertfications member={member} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ProfileEmployment member={member} />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <ApplicationHistory member={member} />
                </TabPanel>
            </Grid>
           
        </Grid>
        
    );
};

export default SocialProfile;
