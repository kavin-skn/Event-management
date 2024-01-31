import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import UserSidebar from './UserSidebar';
import { useState } from 'react';


function User() {

  const[sidebar,SetSidebar]=useState(true);
  const SideBarActive=()=>{SetSidebar(!sidebar)};
    return (
        <div id="header">
      <div id="siteinfo">

      </div>
    <div id="navbar">


      <Link className="navlink" to="/user">Home</Link>
      <Link className="navlink"to="/about">About</Link>
      <Link className="navlink"to="/contact">Contact</Link>
      <Button onClick={SideBarActive} style={{float:"right"}}><ViewHeadlineIcon /></Button>
      <div className={sidebar?"side-active":"side"}>
      <UserSidebar/>
      </div>
    </div>
    </div>
    );
  }
  
  export default User;