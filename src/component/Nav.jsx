import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import RestoreIcon from '@mui/icons-material/Restore';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  return (
    <div className="">
       <BottomNavigation  value={value} onChange={handleChange}>
      <BottomNavigationAction 
        label="Home"
        value="recents"
        icon={<NavLink className={({isActive})=> `${isActive?"text-green-900":""}`} to='/'><RestoreIcon /></NavLink>}
      />
      <BottomNavigationAction
        label="About"
        value="favorites"
        icon={<NavLink to='/order'><RestoreIcon /></NavLink>}
      />
      <BottomNavigationAction
        label="Contact"
        value="nearby"
        icon={<NavLink to='/about'><RestoreIcon /></NavLink>}
      />
      <BottomNavigationAction label="Login" value="folder"
       icon={<NavLink to='/login'><RestoreIcon /></NavLink>} />
    </BottomNavigation>
    </div>
  )
}
