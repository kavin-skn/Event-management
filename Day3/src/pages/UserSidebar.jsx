import React from 'react';
import '../css/Sidebar.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function UserSidebar() {
  return (
    <div className='Sidepanel'>
      <Link to="/view">
      <Button className='sidebutton'>View Events</Button></Link><br/>
      <Link to="/vv">
      <Button className='sidebutton'>View Venues</Button></Link><br/>
      <Link to="/vb">
      <Button className='sidebutton'>View Bookings</Button></Link><br/>
      <Link to="/profile">
      <Button className='sidebutton'>User Profile</Button></Link> <br/>
    </div>
  );
}

export default UserSidebar;
