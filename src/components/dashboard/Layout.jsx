/* eslint-disable no-unused-vars */

import "./layout.css"
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import "/src/components/navbar/navbar.css"

const Layout = () => {
  return <>
  <Navbar/>

  <div className="container">
   <div className="dashboard">
    <div className="sidebar">
    <div className="profile">
      <div className="profile-img-box">
        <img src="/public/profile.jpg" alt="" />
      </div>
      <div className="edit-profile"><IoSettingsOutline className="edit-image-icon"/></div>
      <h3 className="name">John Doe</h3>
      <p className="desc">Beginner</p>
    </div>
    <div className="sidebar-items">
      <NavLink  to="/dashboard" id="sidebar-item" className={({isActive})=>(isActive?"active":"")}>
        <div className="si-img-box">
          <MdOutlineDashboard className="dash_icons"/>
        </div>
        <h4 className="si-name">Dashboard</h4>
      </NavLink>
      <NavLink to="/batch" id="sidebar-item" className={({isActive})=>(isActive?"active":"")}>
        <div className="si-img-box">
        <FiUsers className="dash_icons"/>
         </div>
         <h4 className="si-name">Batch</h4>
      </NavLink>

      <div className="ATD">
      <NavLink to="/" id="sidebar-item" className={({isActive})=>(isActive?"active":"")}>
        <div className="si-img-box">
        <VscFolderActive className="dash_icons" />
        </div>
        <h4 className="si-name">Attendance</h4>
      </NavLink>
      </div>
      <NavLink to="/logout" id="sidebar-item" className={({isActive})=>(isActive?"active":"")}>
        <div className="si-img-box">
        <RiLogoutBoxRLine className="dash_icons" />
        </div>
        <h4 className="si-name">Logout</h4>
        </NavLink>
    </div>
    
  </div>
  
  </div> 
</div>
<Outlet/>     
</>


    
  
}

export default Layout;