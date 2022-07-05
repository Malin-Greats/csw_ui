// import * as React from 'react';
import React, { useState, useEffect, useContext } from "react";
import {Context} from 'store/store/Store'
// material-ui
import { Button, Checkbox, FormControlLabel,FormControl, Radio, RadioGroup, Grid, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useAuth from 'hooks/useAuth';
import { InputAdornment } from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function PersonDetailsForm(...others) {
  const [state, dispatch] = useContext(Context);
  // const [form, setForm] = useState({ first_name: "", last_name: "" });
  const [valueBasic, setValueBasic] = React.useState(new Date());
  const [gender, setGender] = React.useState('female');
  const [member, setMember] = React.useState()
  const [first_name, setFirstName] = React.useState()
  const [last_name, setLastName] = React.useState()
  const [nationality, setNationality] = React.useState()
  const [nationalID, setNationalID] = React.useState()
  const [dob, setDOB] = React.useState(new Date())


  const [valueLabel, setValueLabel] = React.useState('checked');
  const { updatePersonalDetails, user } = useAuth();


  useEffect( async() => {
    try {
      setMember(state.member)
      console.log('PersonDetailsForm state ')
      console.log(member)

    } catch (error) {
        dispatch({type: 'SET_ERROR', payload: error});
    }
}, [])
  const saveForm = () => {
    let form =  {
      member_number : state.member.member_number,
      first_name : first_name ? first_name : state.member.first_name,
      last_name : last_name ? last_name : state.member.last_name,
      nationalID: nationalID ? nationalID : state.member.nationalID,
      nationality: nationality ? nationality : state.member.nationality,
      dob:dob ? dob : state.member.dob,
      gender: gender ? gender : state.member.gender
    }
    console.log('profile form')
    console.log(form)
    updatePersonalDetails(form);
  };
  return (
    <>
      <Formik
              initialValues={{
                email: state.member ? state.member.email : '',
                submit: null,
                first_name: state.member ? state.member.first_name : '',
                last_name: state.member ? state.member.last_name : '',
                nationalID: state.member ? state.member.nationalID : '',
                nationality: state.member ? state.member.nationality : '',
                dob: state.member ? state.member.dob : '',
                gender: state.member ? state.member.gender : '',
              }}
      >
{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
      <form noValidate onSubmit={handleSubmit} {...others}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>

          <TextField required id="firstNameBasic"
          onBlur={handleBlur}
          onChange={(e) =>  setFirstName(e.target.value)}
          inputProps={{}} 
          name="first_name"
          // value={values.first_name ? values.first_name : first_name }
          defaultValue={state.member ? state.member.first_name : first_name}
          label="First name" 
          fullWidth autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          required 
          id="lastNameBasic" 
          // value={values.last_name ? values.last_name : last_name }
          defaultValue={values ? values.last_name : last_name} 
          onChange={(e) =>  setLastName(e.target.value)}
          name="lastName" 
          label="Last" 
          fullWidth autoComplete="family-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          onChange={(e) =>  setNationality(e.target.value)}
          required id="cardName" 
          label="Nationality" 
          fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          onChange={(e) =>  setNationalID(e.target.value)}
          required id="cardNumber" 
          label="National ID" 
          fullWidth autoComplete="cc-number" />
        </Grid>
        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
                renderInput={(props) => <TextField fullWidth {...props} helperText="" />}
                label="Date of Birth"
                inputFormat="MM/dd/yyyy"
                onChange={setDOB}
                value={dob}
                
              />
    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Gender
      </Typography>
        <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
        </Grid>
        <Grid item xs={12}>
        <Button type="submit" variant="contained" size="small" onClick={saveForm} sx={{ my: 3, ml: 1 }}>
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
