
import { IoNotificationsSharp } from "react-icons/io5";

import { FiSearch } from 'react-icons/fi';
import "./navbar.css"



const Navbar = () => {

  return (
   <>
    <section className="navbar-container">
    <article>
    <div className="icon">
    <img src='/public/alpha-logo-1.png' alt="Logo" className='alpha_icon' />
    </div>
    <div className="search">
    <div className='search-container'>
    <span><FiSearch/></span>
    <input type="text" placeholder='Search..'></input>
   </div>
    </div>
    <div className="notification">
    <IoNotificationsSharp className="notify"/>
    </div>
    </article>

    </section>
   </>
  )
}

export default Navbar