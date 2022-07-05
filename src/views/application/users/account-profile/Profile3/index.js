import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project imports
// import Profile from './main';
import AcademicProfile from './AcademicProfile';
import ProfessionalProfile from './ProfessionalProfile';
import WorkProfile from './WorkProfile';
import Profile from './Profile';
import Billing from './Billing';
import Security from './Security';
import Notifications from './Notifications';
import MainCard from 'ui-component/cards/MainCard';
import useAuth from 'hooks/useAuth';
import {useState, useContext} from 'react'
import {Context} from 'store/store/Store'
// tabs
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
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

// ==============================|| PROFILE 3 ||============================== //

const Profile3 = () => {
    const {user, url } = useAuth();
    const [value, setValue] = React.useState(0);
    const [member, setMember] = React.useState()
    const [memberID, setMemberID] = React.useState(user.member_number)
    const [state, dispatch] = useContext(Context);
    const [memberCertificate, setMemberCertificate] = React.useState();
    console.log('user', user)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect( async() => {
        try {
            getMember(user.user_id)
        } catch (error) {
            dispatch({type: 'SET_ERROR', payload: error});
        }
    }, [])
    function getMember(user_id) {
        if (user_id) {
            fetch(`${url}/member/member-profile-detail/${user_id}`)
            .then(response => response.json())
            .then(data => {
                dispatch({type: 'SET_MEMBER', payload: data});
                console.log('state state member')
                console.log(state.member)
                setMemberCertificate(url.concat(data.registration_certificate_picture))

            })
            .catch( error => console.log(error))
        }
    
    
    }
    return (
        <MainCard title="Account">f
            <div>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    onChange={handleChange}
                    sx={{
                        mb: 3,
                        minHeight: 'auto',
                        '& button': {
                            minWidth: 100
                        },
                        '& a': {
                            minHeight: 'auto',
                            minWidth: 10,
                            py: 1.5,
                            px: 1,
                            mr: 2.25,
                            color: 'grey.600'
                        },
                        '& a.Mui-selected': {
                            color: 'primary.main'
                        }
                    }}
                    aria-label="simple tabs example"
                    variant="scrollable"
                >
          <Tab component={Link} to="#" label="Basic Profile" {...a11yProps(0)} />
          <Tab component={Link} to="#" label="Academic Profile" {...a11yProps(1)} />
          <Tab component={Link} to="#" label="Professional Profile" {...a11yProps(2)} />
          <Tab component={Link} to="#" label="Work Experience" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AcademicProfile />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProfessionalProfile />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <WorkProfile />
        </TabPanel>
            </div>
        </MainCard>
    );
};

export default Profile3;
