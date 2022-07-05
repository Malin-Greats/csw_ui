import * as React from 'react';

// material-ui
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import useAuth from 'hooks/useAuth';
// ==============================|| FORM WIZARD - BASIC  ||============================== //


const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

export default function Review() {
  const { user } = useAuth();
  const payments = [
    { name: 'Account type', detail: `${user.first_name}` },
    { name: 'Account holder', detail: `${user.first_name}` },
    { name: 'Membership number', detail: `${user.first_name}` },
    { name: 'Membership Renewal date', detail: `${user.first_name}` }
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Contact Information
          </Typography>
          <Typography gutterBottom>{user.first_name}, {user.last_name} </Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
