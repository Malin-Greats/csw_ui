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

const ApplicationHistory = (props) => {
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
                    <Grid item xs={12}>
                        <SubCard title="Employment">
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="subtitle1">Current</Typography>
                                            <Typography variant="subtitle2">Senior</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Typography variant="subtitle1">Senior UI/UX designer</Typography>
                                            <Typography variant="subtitle2">
                                                Perform task related to project manager with the 100+ team under my observation. Team
                                                management is key role in this company.
                                            </Typography>
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
                                            <Typography variant="subtitle1">2017-2019</Typography>
                                            <Typography variant="subtitle2">Junior</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <Typography variant="subtitle1">Trainee cum Project Manager</Typography>
                                            <Typography variant="subtitle2">Microsoft, TX, USA</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12}>
                        <SubCard title="Skills">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2">Junior</Typography>
                                    <LinearProgressWithLabel color="primary" variant="determinate" value={70} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2">UX Researcher</Typography>
                                    <LinearProgressWithLabel color="primary" variant="determinate" value={80} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2">Wordpress</Typography>
                                    <LinearProgressWithLabel color="secondary" variant="determinate" value={25} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2">Graphic Designer</Typography>
                                    <LinearProgressWithLabel color="primary" variant="determinate" value={80} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2">HTML</Typography>
                                    <LinearProgressWithLabel color="secondary" variant="determinate" value={45} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="body2">PHP</Typography>
                                    <LinearProgressWithLabel color="primary" variant="determinate" value={65} />
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
    );
};

export default ApplicationHistory;
