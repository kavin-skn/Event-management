// AdminSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2>Admin Dashboard</h2>

      <ul>
        <li><Link to="/e">View Events</Link></li>
        <li><Link to="/ae">View Venues</Link></li>
        <li><Link to="/ap">Admin Profile</Link></li>
        {/* Add more admin-related links as needed */}
      </ul>
    </div>
  );
}

export default AdminSidebar;
