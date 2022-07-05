import PropTypes from 'prop-types';
import React, {useEffect, useContext} from 'react';
import {Context} from 'store/store/Store'
// material-ui
import {
    Box,
    Button,
    CardContent,
    Chip,
    Divider,
    Grid,
    LinearProgress,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import Avatar from 'ui-component/extended/Avatar';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconEdit } from '@tabler/icons';
import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import Avatar3 from 'assets/images/users/avatar-3.png';

// progress
function LinearProgressWithLabel({ value, ...others }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    mr: 1
                }}
            >
                <LinearProgress value={value} {...others} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

// personal details table
/** names Don&apos;t look right */
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

// ==============================|| PROFILE 1 - PROFILE ||============================== //

const Profile = () => {
    const { user } = useAuth();
    // const [member, setMember] = React.useState(member);
    const [state] = useContext(Context);
    const { member } = state
    console.log('member profile')
    console.log(member)
    React.useEffect(() => {
        state 
        ?     
        console.log(member)
        // setMember(member)
        :
        console.log(state)
    }, []); 
    const rows = [
        createData('First Name', ':', member?.first_name),
        createData('Last Name', ':', member?.last_name),
        createData('Address', ':', 'Street 110-B Kalians Bag, Dewan, M.P. Harare'),
    ];
    return (
        
        <>
        { member !=null ?
        <Grid container spacing={gridSpacing}>
        <Grid item lg={4} xs={12}>
            <SubCard>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton>
                        <ListItemIcon>
                            <MailTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="subtitle1">Email</Typography>} />
                        <ListItemSecondaryAction>
                            <Typography variant="subtitle2" align="right">
                            {member?.email}
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <PhonelinkRingTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="subtitle1">Phone</Typography>} />
                        <ListItemSecondaryAction>
                            <Typography variant="subtitle2" align="right">
                                {member?.phone}
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemIcon>
                            <PinDropTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="subtitle1">Location</Typography>} />
                        <ListItemSecondaryAction>
                            <Typography variant="subtitle2" align="right">
                                Melbourne
                            </Typography>
                        </ListItemSecondaryAction>
                    </ListItemButton>
                </List>
                {/* <CardContent>
                    <Grid container spacing={0}>
                        <Grid item xs={4}>
                            <Typography align="center" variant="h3">
                                37
                            </Typography>
                            <Typography align="center" variant="subtitle2">
                                Mails
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography align="center" variant="h3">
                                2749
                            </Typography>
                            <Typography align="center" variant="subtitle2">
                                Followers
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography align="center" variant="h3">
                                678
                            </Typography>
                            <Typography align="center" variant="subtitle2">
                                Following
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent> */}
            </SubCard>
        </Grid>
        <Grid item lg={8} xs={12}>
            <Grid container direction="column" spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard
                        title="About me"
                        secondary={
                            <Button>
                                <IconEdit stroke={1.5} size="1.3rem" />
                            </Button>
                        }
                    >
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body2">
                                    Hello,I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I
                                    create digital Products a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Personal Details</Typography>
                            </Grid>
                            <Divider sx={{ pt: 1 }} />
                            <Grid item xs={12}>
                                <TableContainer>
                                    <Table
                                        sx={{
                                            '& td': {
                                                borderBottom: 'none'
                                            }
                                        }}
                                        size="small"
                                    >
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell variant="head">{row.name}</TableCell>
                                                    <TableCell>{row.calories}</TableCell>
                                                    <TableCell>{row.fat}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
            :
            <></>
        }
    </>
    );
};

export default Profile;
