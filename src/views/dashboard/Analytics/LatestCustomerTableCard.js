import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import useAuth from 'hooks/useAuth';
// material-ui
import { Button, CardActions, CardMedia, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';



// =========================|| DASHBOARD ANALYTICS - LATEST CUSTOMERS TABLE CARD ||========================= //

const LatestCustomerTableCard = ({ title }) => {
    const { url } = useAuth();

    const [members, setMembers] = useState([])
    
    useEffect( async() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        const res = await fetch(`${url}/member/member-profile-list`, requestOptions)
        const data = await res.json()
        setMembers(data)
    }, [])

    return(
    <MainCard title={title} content={false}>
        <PerfectScrollbar style={{ height: 450, padding: 0 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ pl: 3 }}>
                                Submitted Date</TableCell>
                            <TableCell sx={{ pl: 3 }}>
                                Profile</TableCell>
                            <TableCell align="left">
                                Appications Reference</TableCell>
                            <TableCell align="left">
                                Appications Status</TableCell>
                            <TableCell align="center">
                                Phone
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member, index) => (
                            <TableRow hover key={index}>
                                <TableCell align="left">{member.name}</TableCell>

                                <TableCell sx={{ pl: 3 }}>
                                    <CardMedia component="img" image={member.image} title="image" sx={{ width: 30, height: 'auto' }} />
                                </TableCell>
                                <TableCell align="left">{member.name}</TableCell>
                                <TableCell align="left">{member.email}</TableCell>
                                <TableCell align="center">{member.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PerfectScrollbar>

        <Divider />
        {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="text" size="small">
                View all Latest Customers
            </Button>
        </CardActions> */}
    </MainCard>
)}

LatestCustomerTableCard.propTypes = {
    title: PropTypes.string
};

export default LatestCustomerTableCard;
