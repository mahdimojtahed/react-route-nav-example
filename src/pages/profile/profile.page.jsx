import React from "react";
import { Link, Outlet } from 'react-router-dom';
 

const profile = () => (
   <div>
      <h2>Username : mahdyar</h2>
      <h3>age : 23</h3>
      <Link to='/profile/socials'>Click here</Link>
      <Outlet />
   </div>
)


export default profile;
