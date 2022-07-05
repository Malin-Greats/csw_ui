import React, { useState } from "react";

// material-ui
import { Avatar, Button, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import ProfessionalProfileWizard from 'views/forms/forms-wizard/ProfessionalProfileWizard';
import {Checkbox, FormControlLabel,FormControl, FormGroup, Radio, RadioGroup} from '@mui/material';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// assets
const Avatar1 = '/assets/images/users/avatar-1.png';
const Input = styled('input')({
  display: 'none',
});
// ==============================|| PROFILE 3 - PROFILE ||============================== //

    const ProfessionalProfile = () => {
      const [img, setImg] = useState();
      const { user } = useAuth();
      console.log(user.first_name)
      const [data, setData] = useState({
        title: "",
        description: "",
        image_url: "",
    });
    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
  
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        image_url: "",
    });

    const handleImageChange = (e) => {
      console.log("upload image")
      let newData = { ...data };
      newData["image_url"] = e.target.files[0];
      setData(newData);
    };

    const doSubmit = async (e) => {
      e.preventDefault();
      // const response = await API.createMyModelEntry(data);
      // if (response.status === 400) {
      //     setErrors(response.data);
      // }
    };
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item sm={6} md={4}>
        <SubCard title="Certificates" contentSX={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <label htmlFor="icon-button-file">
            <Input onChange={onImageChange} accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
              <Typography variant="subtitle2" align="center">
                Upload Professional certificate
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Button variant="contained"
                       type="submit"
                       onClick={(e) => doSubmit(e)} 
        component="span"
        >
          Upload
        </Button>
      </label>
    </Stack>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item sm={6} md={8}>
      <ProfessionalProfileWizard />
      </Grid>
    </Grid>
  );
};

export default ProfessionalProfile;
