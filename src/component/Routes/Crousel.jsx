import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

  


let url1 = "https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D";


let url2 = "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D";


let url3 = "https://images.unsplash.com/photo-1517434324-1db605ff03c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D";


let url4 = "https://images.unsplash.com/photo-1517434324-1db605ff03c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D";

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: url1
  },
  {
    label: 'Bird',
    imgPath: url2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:url3,
  },
  {
    label: 'Goč, Serbia',
    imgPath:url4,
  },
];

function Crousel() {
  const theme = useTheme();


  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  
  };




  

  return (
    <Box >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>

      
      
       <img className='w-full   h-96 ' src={images[activeStep].imgPath} alt="" />
      
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Crousel;