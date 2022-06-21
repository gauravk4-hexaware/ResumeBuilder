import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { About } from "../Models/AboutModel";
import { refType } from "@mui/utils";

type Props = {};

export default function BasicDetails(props: any) {
  const [basicData, setBasicData] = useState(new About());

  const setNameFun =  (param: any) => {
     setBasicData(
      (prevValue) => {
        let obj =  { ...prevValue, name: param.target.value }        
        return obj;
      }
    );    
    props.callBack(basicData);
  };

  const setDesignationFun = (param: any) => {
    // basicData.designation = param.target.value;

    setBasicData((prevValue) => {
      return { ...prevValue, designation: param.target.value };
    });

    props.callBack(basicData);
  };
  const setPhoneFun = (param: any) => {
    // basicData.phoneNumber = param.target.value;

    setBasicData((prevValue) => {
      return { ...prevValue, phoneNumber: param.target.value };
    });

    props.callBack(basicData);
  };
  const setEmailFun = (param: any) => {
    // basicData.email = param.target.value;

    setBasicData((prevValue) => {
      return { ...prevValue, email: param.target.value };
    });
    props.callBack(basicData);
  };
  const setCityFun = (param: any) => {
    // basicData.city = param.target.value;

    setBasicData((prevValue) => {
      return { ...prevValue, city: param.target.value };
    });

    props.callBack(basicData);
  };
  const setCountryFun = (param: any) => {
    // basicData.country = param.target.value;

    setBasicData((prevValue) => {
      return { ...prevValue, country: param.target.value };
    });

    props.callBack(basicData);
  };

  const setAboutFun = (param: any) => {
    // basicData.about = param.target.value;

    setBasicData((prevValue) => {
      return { ...prevValue, about: param.target.value };
    });

    props.callBack(basicData);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={setNameFun}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Designation"
            name="Designation"
            label="Designation"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={setDesignationFun}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone number"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={setPhoneFun}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="E-Mail"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={setEmailFun}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={setCityFun}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={setCountryFun}
          />
        </Grid>

        <Grid item xs={12}>
          <textarea
            name="comments"
            required
            id="comments"
            style={{
              font: "font-family:sans-serif;font-size:1.2em",
              width: "100%",
            }}
            onChange={setAboutFun}
          >
            About*
          </textarea>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
