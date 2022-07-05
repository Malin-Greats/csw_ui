import * as React from 'react';
// material-ui
import { Button,Divider, Checkbox, FormControlLabel,FormControl, Radio, RadioGroup, Grid, TextField, Typography } from '@mui/material';
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

export default function ForeignPracticeForm(...others) {
  const [form, setForm] = useState({ first_name: "", position: "" });
  const [endYear, setEndYear] = React.useState(new Date());
  const [startYear, setStartYear] = React.useState(new Date());
  const [valueBasic, setValueBasic] = React.useState(new Date());
  const [valueGender, setValueGender] = React.useState('female');
  const [valueLabel, setValueLabel] = React.useState('checked');
  const { first_name, last_name } = form;
  const { updatePersonalDetails } = useAuth();
  const [disciplined, setDisciplined] = React.useState(false);
  const [valueDisciplined, setValueDisciplined] = React.useState('checked');

  const saveForm = () => {
    console.log('save form')
    updatePersonalDetails();
  };
  const changeDisciplined = (e) => {
    console.log('save form')
    console.log(e)
    setValueDisciplined(e)
    if (e === 'yes') {
      setDisciplined(true);
    } else {
      setDisciplined(false);
    }
  };
  return (
    <>
      <Formik
              initialValues={{
                submit: null,
                registration_number: '',
                jurisdiction: '',
                institution: '',
                city: '',
                supervisor: '',
                email: '',
                phone: '',
                position: '',
                country: '',
                start_year: '',
                end_year: '',
              }}
                  onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await updatePersonalDetails(
                          values.jurisdiction,
                          values.registration_number,
                          values.institution,
                          values.city,
                          values.supervisor,
                          values.email,
                          values.phone,
                          values.position,
                          values.start_year,
                          values.end_year,
                          values.country
                          );
    
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
                <Typography variant="h5" gutterBottom sx={{ mb: 1 }}>
                Do/Have you ever practiced as a Registered Social Worker/Private Agency in the past three years?
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mb: 1 }}>
                  By private practice we mean providing Social Work Services to individuals or agencies as a Private Social
Worker with own registered service
         </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>

<TextField required id="jurisdiction"
onBlur={handleBlur}
onChange={handleChange}
inputProps={{}} 
name="jurisdiction"
value={values.jurisdiction} 
label="Jurisdiction" 
fullWidth autoComplete="given-name" />
</Grid>
<Grid item xs={12} sm={6}>
<TextField required id="registration_number"
onChange={handleChange}
inputProps={{}} 
value={values.registration_number}  
name="registration_number" 
label="registration_number" 
fullWidth autoComplete="registration_number" />
</Grid>
      <Grid item xs={12} sm={6}>

          <TextField 
          required id="position"
          name="position"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
          value={values.position} 
          label="Area of Practice
          e.g. counselling" 
          fullWidth autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          required id="institution" 
          name="institution" 
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
          value={values.institution} 
          label="Name of Practice" 
          fullWidth autoComplete="institution" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="city"
          name="city" 
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
          value={values.city} 
          label="City" 
          fullWidth autoComplete="city" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="country"
          name="country" 
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
          value={values.country}  
          label="Country" 
          fullWidth autoComplete="country" />
        </Grid>
        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
                renderInput={(props) => <TextField fullWidth {...props} helperText="" />}
                label="Start Year"
                value={values.start_year}
                onChange={(startYear) => {
                  setStartYear(startYear);
                }}
              />

    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
                renderInput={(props) => <TextField fullWidth {...props} helperText="" />}
                label="End Year"
                value={values.end_year}
                onChange={(endYear) => {
                  setEndYear(endYear);
                }}
              />

    </LocalizationProvider>
        </Grid>
        <Divider />
        <Grid item xs={12} sm={12}>
          <TextField required id="Supervisor"
          name="supervisor" 
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
          value={values.supervisor}  
          label="Contact person full name" 
          fullWidth autoComplete="supervisor" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="phone" 
          name="phone" 
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
          value={values.phone} 
          label="Phone" fullWidth 
          autoComplete="phone" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="email" 
          name="email" 
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}}
          value={values.email} 
          label="email" 
          fullWidth autoComplete="email" />
        </Grid>
        <Grid item xs={12} >
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Have you faced any disciplinary action by a professional or regulatory body in your private practice?    
        </Typography>
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="Disciplined"
                    value={valueDisciplined}
                    onChange={(e) => changeDisciplined(e.target.value)}
                    name="disciplined-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        {disciplined 
        ?           
        <TextField required id="Disciplined"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="disciplined"
          value={values.disciplined} 
          label="Discipline details" 
          fullWidth autoComplete="disciplined" /> 
          : 
          <></>
        }
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" size="small" onClick={saveForm} sx={{ my: 3, ml: 1 }}>
                  Save
                </Button>
        </Grid>
      </Grid>
      </form>
      )}
      </Formik>
    </>
  );
}
