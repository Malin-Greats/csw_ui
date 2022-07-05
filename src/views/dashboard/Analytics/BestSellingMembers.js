import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'

import useAuth from 'hooks/useAuth';

// material-ui
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

// third party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

const BestSellingMembers = ({ title }) => {
    const { url } = useAuth();
    const successSX = { color: 'success.dark' };
    const errorSX = { color: 'error.main' };

    const [members, setMembers] = useState([])
    const [topMembers, setTopMembers] = useState([])
    

    const allMembers = async() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          const res = await fetch(`${url}/member/member-profile-list`, requestOptions)
          const data = await res.json()
          console.log(res)
          console.log('Res Data', data)
          setMembers(data)
    }

    useEffect(()=> {
        allMembers()
        
    }, [])
    
    let tempMembers = members
    let newTempMembers = []
    let tempRevenue = 0
    let tempIndexID 
    let tempIndex = 0
    let ArrTopFive = []
    let ArrDataIndex = []


    try {
        console.log('State Members', tempMembers.length)
        if (tempMembers === 0 ) {
            for (let i = 0; i < 5; i++) {
                console.log('First Temp Rev', tempRevenue)
                for (let i = 0; i < tempMembers.length; i++) {
                    console.log('Check', i)
                    console.log(parseFloat(tempMembers[i].totalRevenue))
                    if (parseFloat(tempMembers[i].totalRevenue) > tempRevenue) {
                        tempRevenue = parseFloat(tempMembers[i].totalRevenue)
                        tempIndexID = tempMembers[i]
                        tempIndex = i
                       
                    }
                    console.log('Current Index', i)
                    console.log('Current Temp Rev', tempRevenue)
                }
                console.log('Current Temp Rev II', tempRevenue)
                console.log('added', i)
                console.log('temp Index', tempIndex)
                newTempMembers = tempMembers.splice(tempIndex, 1)
                console.log(newTempMembers)
                console.log(tempMembers)
    
                ArrTopFive[i] = tempRevenue
                ArrDataIndex[i] = tempIndexID   
                tempRevenue = 0
                tempIndex = 0
                console.log('Current top Five', ArrTopFive)
            }
            console.log('Array Top Five', ArrTopFive)
            console.log('Array Data Index', ArrDataIndex)
            console.log('Array New Temp Applications', newTempMembers)
            
            // setTopApplications(ArrDataIndex)
        }
          } catch (ex) {
            console.error('outer', ex.message);
          }
            // console.log('Top Applications', topApplications)
          
        

  

    return (
        <MainCard title={title} content={false}>
            <PerfectScrollbar style={{ height: 250 }}>
                <List
                    component="nav"
                    aria-label="main mailbox folders"
                    sx={{
                        '& svg': {
                            width: 32,
                            my: -0.75,
                            ml: -0.75,
                            mr: 0.75
                        }
                    }}
                >
                    {tempMembers === 0 &&
                         ArrDataIndex.map((member, index)=> (
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArrowDropUpIcon sx={successSX} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <span>{member.name}</span>
                                            <Typography sx={successSX}>+$ {member.totalRevenue}</Typography>
                                        </Stack>
                                    }
                                />
                            </ListItemButton>
            
                            ))}
                   
                    
                    
                
                            
                </List>
            </PerfectScrollbar>
        </MainCard>
    );
};

BestSellingMembers.propTypes = {
    title: PropTypes.string
};

export default BestSellingMembers;
