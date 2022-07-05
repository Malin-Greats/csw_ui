import React from 'react';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';

// project imports
import AddressForm from './AddressForm';
import TrainingDetailsForm from './TrainingDetailsForm';
import PersonContactForm from './PersonContactForm';
import Review from './Review';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';


function getStepContent(step) {
  console.log(step)
  switch (step) {
    case 0:
      return <TrainingDetailsForm /> ;
    case 1:
      return <TrainingDetailsForm />;
    case 2:
      return <TrainingDetailsForm />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const AcademicProfileWizard = () => {
  // step options
  // const steps = ['Course Details'];
  
  const [activeStep, setActiveStep] = React.useState(0);
  
  let arr = ['training'];
  const [steps, setSteps] = React.useState(['training'])
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleAddTraining = () => {
    console.log('current step')
    console.log(steps)
    setActiveStep(activeStep + 1);
    console.log('current activeStep')
    console.log(activeStep)
    let training = 'training' + activeStep
    setSteps(steps => [...arr, training ])
    console.log('NEW steps')
    console.log(steps)

  };
  return (
    <MainCard title="Training Details" >
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
            <Typography variant="h5" gutterBottom>
              Thank you for completing your form.
            </Typography>
            <Typography variant="subtitle1">
              Your Membership number is #2001539.
              Your next renewal is
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" color="success" onClick={() => setActiveStep(0)} sx={{ my: 3, ml: 1 }}>
                  Edit Profile
                </Button>
              </AnimateButton>
            </Stack>
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
                  {activeStep === steps.length - 1 ? 'Confirm' : 'Add Another Training'}
                </Button>

              </AnimateButton>

              <AnimateButton>
                <Button variant="contained" onClick={handleAddTraining} sx={{ my: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Add Another Training' : 'Confirm'}
                </Button>
              </AnimateButton>
            </Stack>
          </>
        )}
      </>
    </MainCard>
  );
};

export default AcademicProfileWizard;
