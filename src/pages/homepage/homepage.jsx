import React from "react";
import './homepage.style.scss'

const Homepage = () => (
   <main>
      <div className="home-card">
         <h2>Homepage</h2>
         <p>Simple application to demonstrate how to use react Router api v6 </p>
         
         <p>
         - Books section simply using params and filters </p>


         <p>
         - Profile section is an example of using Outlet which is a new feature of React-Route so when we click on link inside profile , socials components renders as a child
         </p>
      </div>
   </main> 
)


export default Homepage;
