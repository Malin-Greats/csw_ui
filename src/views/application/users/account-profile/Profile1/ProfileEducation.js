import PropTypes from 'prop-types';
import * as React from 'react';

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

const ProfileEducation = (props) => {
    const { user } = useAuth();
    const [member, setMember] = React.useState([]);

    console.log('props member kaaa')
    console.log(props.member)


    const rows = [
        createData('First Name', ':', props.member?.first_name),
        createData('Last Name', ':', props.member?.last_name),
        createData('Address', ':', 'Street 110-B Kalians Bag, Dewan, M.P. Harare'),
        createData('Phone', ':', '+0 123456789 , +0 123456789'),
        createData('Email', ':', props.member?.email),
    ];

    return (
        <Grid container spacing={gridSpacing}>
        
            <Grid item lg={12} xs={12}>
                <Grid container direction="column" spacing={gridSpacing}> 
                    <Grid item xs={12}>
                        <SubCard title="Education">
                            <Grid container direction="column" spacing={1}>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">2014-2017</Typography>
                                            <Typography variant="subtitle2">Master Degree</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Typography variant="subtitle1">Master Degree in Computer Application</Typography>
                                            <Typography variant="subtitle2">University of Oxford, England</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                </Box>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">2011-2013</Typography>
                                            <Typography variant="subtitle2">Bachelor</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Typography variant="subtitle1">Bachelor Degree in Computer Engineering</Typography>
                                            <Typography variant="subtitle2">Imperial College London</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                </Box>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">2009-2011</Typography>
                                            <Typography variant="subtitle2">School</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Typography variant="subtitle1">Higher Secondary Education</Typography>
                                            <Typography variant="subtitle2">School of London, England</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProfileEducation;
