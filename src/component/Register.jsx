import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function Register() {
  return (
    <div>
         <form method='post' className="border-2 w-11/12  sm:w-1/2 mx-auto p-2 grid gap-3 mt-4 " action="/api/getRegister" >
     <TextField  name='fullname'  id="outlined-basic" label="Username" variant="outlined" />
     <TextField name='pwd'  id="outlined-basic" label="Password" variant="outlined" />
     <TextField name='email'  id="outlined-basic" label="email" variant="outlined" />
     <Button  type='submit' variant="contained">Register</Button>
     </form>
    </div>
  )
}
