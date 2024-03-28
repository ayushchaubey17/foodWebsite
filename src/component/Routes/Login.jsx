import React from 'react'
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function Login() {
  return (
    <div>
     
     <form method='post' className="border-2 w-11/12  sm:w-1/2 mx-auto p-2 grid gap-3 mt-4 " action="/api/getLogin" >
     <TextField  name='username'  id="outlined-basic" label="Username" variant="outlined" />
     <TextField name='password'  id="outlined-basic" label="Password" variant="outlined" />
     <Button  type='submit' variant="contained">SignIn</Button>
     </form>

     <NavLink to="/register" className="grid w-11/12 sm:w-1/2 mx-auto mt-4">
     <Button type='submit' color='success' variant="contained">Register here</Button>
     </NavLink>
    </div>
  )
}
