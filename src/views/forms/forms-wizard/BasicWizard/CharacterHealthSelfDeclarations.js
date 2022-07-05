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

export default function CharacterHealthSelfDeclarations(...others) {
  const [offence, setOffence] = React.useState(true);
  const [valueOffence, setValueOffence] = React.useState('checked');

  const [disciplined, setDisciplined] = React.useState(false);
  const [valueDisciplined, setValueDisciplined] = React.useState('checked');


  const [civilProceedings, setCivilProceedings] = React.useState(false);
  const [valueCivilProceedings, setValueCivilProceedings] = React.useState('checked');

  const [healthCondition, setHealthCondition] = React.useState(false);
  const [valueHealthCondition, setValueHealthCondition] = React.useState('checked');

  const [otherDeclarations, setOtherDeclarations] = React.useState(false);
  const [valueOtherDeclarations, setValueOtherDeclarations] = React.useState('checked');

  const { updatePersonalDetails } = useAuth();

  const saveForm = () => {
    console.log('save form')
    updatePersonalDetails();
  };
  const changeOffence = (e) => {
    console.log('save form')
    console.log(e)
    setValueOffence(e)
    if (e === 'yes') {
      setOffence(true);
    } else {
      setOffence(false);
    }
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

  const changeCivilProceedings = (e) => {
    console.log('save form')
    console.log(e)
    setValueCivilProceedings(e)
    if (e === 'yes') {
      setCivilProceedings(true);
    } else {
      setCivilProceedings(false);
    }
  };

  const changeHealthCondition = (e) => {
    console.log('save form')
    console.log(e)
    setValueHealthCondition(e)
    if (e === 'yes') {
      setHealthCondition(true);
    } else {
      setHealthCondition(false);
    }
  };

  const changeOtherDeclarations = (e) => {
    console.log('save form')
    console.log(e)
    setValueOtherDeclarations(e)
    if (e === 'yes') {
      setOtherDeclarations(true);
    } else {
      setOtherDeclarations(false);
    }
  };


  return (
    <>
      <Formik
              initialValues={{
                email: 'info@codedthemes.com',
                password: '123456',
                submit: null,
                offence: '',
                disciplined: '',
                healthCondition: '',
                otherDeclarations: '',
                civilProceedings: ''
              }}
                //   onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                //     try {
                //         await updatePersonalDetails(values.first_name,values.last_name);
    
                //         if (scriptedRef.current) {
                //             setStatus({ success: true });
                //             setSubmitting(false);
                //         }
                //     } catch (err) {
                //         console.error(err);
                //         if (scriptedRef.current) {
                //             setStatus({ success: false });
                //             setErrors({ submit: err.message });
                //             setSubmitting(false);
                //         }
                //     }
                // }}
      >


{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
      <form noValidate onSubmit={handleSubmit} {...others}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Have you ever been convicted of a criminal offence, received a police caution or been convicted of a criminal offence for which you received a conditional discharge?
      </Typography>
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="offence"
                    value={valueOffence}
                    onChange={(e) => changeOffence(e.target.value)}
                    name="offence-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        {offence 
        ?           
        <TextField required id="Offence"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="offence"
          value={values.offence} 
          label="Offense details" 
          fullWidth autoComplete="offence" /> 
          : 
          <></>
        }
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Have you been disciplined by a professional or regulatory body or your employer      </Typography>
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
        <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Have you had civil proceedings (other than divorce) brought against you?      </Typography>
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="civilProceedings"
                    value={valueCivilProceedings}
                    onChange={(e) => changeCivilProceedings(e.target.value)}
                    name="civilproceedings-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        {civilProceedings 
        ?           
        <TextField required id="civilProceedings"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="civilProceedings"
          value={values.civilProceedings} 
          label="Civil Proceedings details" 
          fullWidth autoComplete="civil-proceedings" /> 
          : 
          <></>
        }
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Do you have any physical or mental health condition that would affect your fitness to practice      </Typography>
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="healthCondition"
                    value={valueHealthCondition}
                    onChange={(e) => changeHealthCondition(e.target.value)}
                    name="healthcondition-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        {healthCondition 
        ?           
        <TextField required id="healthCondition"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="healthCondition"
          value={values.healthCondition} 
          label="Health Condition details" 
          fullWidth autoComplete="health-condition" /> 
          : 
          <></>
        }
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Other Declarations</Typography>
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="healthCondition"
                    value={valueOtherDeclarations}
                    onChange={(e) => changeOtherDeclarations(e.target.value)}
                    name="healthcondition-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>

        </Grid>
        <Grid item xs={12}>
        {otherDeclarations 
        ?           
        <TextField required id="otherDeclarations"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="otherDeclarations"
          value={values.otherDeclarations} 
          label="Other Declarations" 
          fullWidth autoComplete="other-declarations" /> 
          : 
          <></>
        }

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
