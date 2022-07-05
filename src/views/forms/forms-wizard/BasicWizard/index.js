import React, { useState, useContext } from "react";
import {Context} from 'store/store/Store'

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography } from '@mui/material';

// project imports
import AddressForm from './AddressForm';
import PaymentForm from './PersonDetailsForm';
import PersonContactForm from './PersonContactForm';
import CharacterHealthSelfDeclarations from './CharacterHealthSelfDeclarations';
import Review from './Review';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// step options
const steps = ['Personal Details', 'Contact details', 'Character and Health Self Declarations', 'Profile Summary'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentForm /> ;
    case 1:
      return <PersonContactForm />;
    case 2:
        return <CharacterHealthSelfDeclarations />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const BasicWizard = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, dispatch] = useContext(Context);
  console.log('member details state ')
  console.log(state.member)
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainCard title="Member Details" >
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

export default BasicWizard;
