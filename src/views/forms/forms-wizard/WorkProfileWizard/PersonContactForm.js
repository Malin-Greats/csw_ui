import * as React from 'react';
// material-ui
import { Button, Checkbox, FormControlLabel,FormControl, Radio, RadioGroup, Grid, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useEffect, useState } from "react";
import useAuth from 'hooks/useAuth';
import { InputAdornment } from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function PersonDetailsForm(...others) {
  const [form, setForm] = useState({ first_name: "", last_name: "" });
  const [valueBasic, setValueBasic] = React.useState(new Date());
  const [valueGender, setValueGender] = React.useState('female');
  const [valueLabel, setValueLabel] = React.useState('checked');
  const { first_name, last_name } = form;
  const { updatePersonalDetails } = useAuth();

  const saveForm = () => {
    console.log('save form')
    updatePersonalDetails();
  };
  return (
    <>
      <Formik
              initialValues={{
                email: 'info@codedthemes.com',
                password: '123456',
                submit: null,
                first_name: '',
                last_name: ''
              }}
                  onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await updatePersonalDetails(values.first_name,values.last_name);
    
      // const response = await API.createMyModelEntry(data);
      // if (response.status === 400) {
      //     setErrors(response.data);
      // }
                    } catch (err) {
                        console.error(err);
                        // if (scriptedRef.current) {
                        //     setStatus({ success: false });
                        //     setErrors({ submit: err.message });
                        //     setSubmitting(false);
                        // }
                    }
                }}
      >


{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
      <form noValidate onSubmit={handleSubmit} {...others}>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Currently a Zimbabwe Resident?
      </Typography>
        <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={valueLabel}
                    onChange={(e) => setValueLabel(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        </Grid>
      <Grid item xs={12}>

          <TextField required id="fullHomeAddress"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="full_home_address"
          value={values.full_home_address} 
          label="Full Home Address" 
          fullWidth autoComplete="fullHomeAddress" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="cityBasic" name="city" label="Residential City/Town" fullWidth autoComplete="city" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="phone" label="Phone" fullWidth autoComplete="phone" />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" size="small" onClick={saveForm} sx={{ my: 3, ml: 1 }}>
                  Save Details
                </Button>
        </Grid>
      </Grid>
      </form>
      )}
      </Formik>
    </>
  );
}
