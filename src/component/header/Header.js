import React from 'react'
import Logo from "../../img/logo.jpg"
import { Link } from 'react-router-dom';
const Header = () => {

 const style={

  nav:{
    backgroundColor:'#6610f2',
    height:"70px",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    padding:"0px 10px",
  },

logo:{
height:"50px",

},

list:{
display:"flex"
},


navlinks:{

  color:"white",
  fontWeight:300,
  padding:"0px 20px",
  textDecoration: 'none'

}




}




  return (
    <nav style={style.nav}>
    <div>
      <img style={style.logo} src={Logo} alt="Logo" />
    </div>
    <div style={style.list} className="options">
     
        <Link style={style.navlinks} to="/itjob">IT job</Link>
        <Link style={style.navlinks} to="/internship">Internship</Link>
        <Link style={style.navlinks} to="/govjob">Gov job</Link>
    
        <Link style={style.navlinks} to="#"></Link>
        <Link style={style.navlinks} to="#"></Link>
        <Link style={style.navlinks} to="/login">Login</Link>
        <Link style={style.navlinks} to="/register">Register</Link>

    
    </div>
  </nav>
  )
}

export default Header