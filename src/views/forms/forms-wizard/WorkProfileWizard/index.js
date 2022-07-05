import React, { useState }  from 'react';

// material-ui
import { Button, Grid, TextField, FormControlLabel,FormControl, Radio, RadioGroup,  Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import { styled } from '@mui/material/styles';

// project imports PrivatePracticeForm
import PrivatePracticeForm from './PrivatePracticeForm';
import ForeignPracticeForm from './ForeignPracticeForm';
import TrainingDetailsForm from './TrainingDetailsForm';
import PersonContactForm from './PersonContactForm';
import Review from './Review';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// assets
const Avatar1 = '/assets/images/users/avatar-1.png';
const Input = styled('input')({
  display: 'none',
});

function getStepContent(step) {
  console.log(step)
  switch (step) {
    case 0:
      return <TrainingDetailsForm /> ;
    case 1:
      return <PrivatePracticeForm />;
    case 2:
      return <ForeignPracticeForm/>;
    case 3:
      return <Review />;
    default:
      return <TrainingDetailsForm /> ;
  }
}

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const WorkProfileWizard = ({privatePractice, foreignPractice}) => {
  // step options
  // const steps = ['Course Details'];
  const [certify, setCertify] = React.useState(false);
  const [Img, setImg] = React.useState(false);
  const [API, setAPI] = React.useState(false);
  const [errors, setErrors] = React.useState(false);
  const [handleBlur, setHandleBlur] = React.useState(false);
  const [handleChange, setHandleChange] = React.useState(false);
  const [values, setValues] = React.useState(false);
  const [valueCertify, setValueCertify] = React.useState('checked');
  const [data, setData] = useState({
    title: "",
    description: "",
    image_url: "",
});
const onImageChange = (e) => {
  const [file] = e.target.files;
  setImg(URL.createObjectURL(file));
};
const doSubmit = async (e) => {
  e.preventDefault();
  const response = await API.createMyModelEntry(data);
  if (response.status === 400) {
      setErrors(response.data);
  }
}

  const saveForm = () => {
    console.log('save form')
    updatePersonalDetails();
  };
  const changeCertify = (e) => {
    console.log('save form')
    console.log(e)
    setValueCertify(e)
    if (e === 'yes') {
      setCertify(true);
    } else {
      setCertify(false);
    }
  };

  const updatePersonalDetails = () => {
    console.log('updatePersonalDetails')
  }

  const [activeStep, setActiveStep] = React.useState(0);
  
  let arr = ['Experience'];
  const [steps, setSteps] = React.useState(arr)
  const [stepperItems, setStepperItems] = React.useState(arr)

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  

  React.useEffect(() => {
    console.log('privatePractice')
    console.log(privatePractice)

    
    updatePractice(privatePractice, foreignPractice)
    // updateForeignPractice(foreignPractice)

  }, [privatePractice,foreignPractice]);


 const updatePractice = (privatePractice, foreignPractice) => {
  console.log('UPDATE Practice')
  if (privatePractice == false && foreignPractice == false) {
    let arr = ['Experience'];
    setActiveStep(0)
    setSteps(arr)
    console.log('new activeStep')
    console.log(activeStep)
  } else if (privatePractice == true && foreignPractice == false) {
    let arr = ['Experience', 'privatePractice'];
    // setActiveStep(1)
    setSteps(arr)
    console.log('new arr')
    console.log(arr)
  } else if (privatePractice == false && foreignPractice == true) {
    let arr = ['Experience', 'foreignPractice'];
    // setActiveStep(2)
    setSteps(arr)
    console.log('new activeStep')
    console.log(activeStep)
  } else if (privatePractice == true && foreignPractice == true) {
    let arr = ['Experience', 'privatePractice', 'foreignPractice'];
    // setActiveStep(3)
    setSteps(arr)
    console.log('new activeStep')
    console.log(activeStep)
  } else {
    let arr = ['Experience'];
    setActiveStep(0)
    setSteps(arr)
    console.log('new activeStep')
    console.log(activeStep)
  }

 }
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainCard >
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
              <SubCard contentSX={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
      <label htmlFor="icon-button-file">
      {/* <Avatar alt="User 1" src={img ? img : Avatar1  } sx={{ width: 100, height: 100 }} /> */}
        <Input onChange={onImageChange} accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
        Upload Current Employer Endorsement
              </Typography>
            </Grid>
          </Grid>
        </SubCard>
        <SubCard  sx={{ mt: 5 }} contentSX={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
      <label htmlFor="icon-button-file">
      {/* <Avatar alt="User 1" src={img ? img : Avatar1  } sx={{ width: 100, height: 100 }} /> */}
        <Input onChange={onImageChange} accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
              Upload Character Reference
              </Typography>
            </Grid>
          </Grid>
        </SubCard>
<Grid item xs={12} >
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        I certify that the facts set in all submitted forms are to the best of my knowledge and belief true and correct
        </Typography>
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="Certify"
                    value={valueCertify}
                    onChange={(e) => changeCertify(e.target.value)}
                    name="certify-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        {certify 
        ?           
        <TextField required id="Certify"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="certify"
          value={values.certify} 
          label="Discipline details" 
          fullWidth autoComplete="certify" /> 
          : 
          <></>
        }
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" size="small" onClick={saveForm} sx={{ my: 3, ml: 1 }}>
                  Save
                </Button>
        </Grid>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <AnimateButton>
                <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                </Button>
              </AnimateButton>
            </Stack>
          </>
        )}
      </>
    </MainCard>
  );
};

export default WorkProfileWizard;
