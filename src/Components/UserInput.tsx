import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicDetails from "./BasicDetails";
import WorkHistory from "./WorkHistory";
import TechnicalSkills from "./TechnicalSkills";
import EducationCertification from "./EducationCertification";
import { About } from "../Models/AboutModel";

type Props = {};

const steps = [
  "Basic Details",
  "Work History",
  "Technical Skills",
  "Education & Certification",
];




const theme = createTheme();

export default function UserInput(props : any) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const basicDetailData = (param : About)=>{ 
    props.callBack(param);
  }


  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <BasicDetails  callBack =  {basicDetailData}/>;
      case 1:
        return <WorkHistory />;
      case 2:
        return <TechnicalSkills />;
      case 3:
        return <EducationCertification />;
      default:
        throw new Error("Unknown step");
    }
  }
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" style={{ width: "100%", height: "100%" }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Resume Form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  This is your resume
                  <Button>Edit</Button>
                  <Button>Download</Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Preview Resume" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
