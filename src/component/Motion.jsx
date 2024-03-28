import React,{useState,useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import ImjComp from './ImjComp';

export default function Motion({data}) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
      },[]);

  return (
    <div>
       <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
      
      <div className="w-11/12 sm:w-110/12  mx-auto"><Paper elevation={10}>
          <ImjComp data={data} />
         
    </Paper>
    </div>
      </Slide>
    </div>
  )
}
