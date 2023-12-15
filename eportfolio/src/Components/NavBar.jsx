import React from 'react'
import {Link} from 'react-router-dom'
import Logo1 from '../image/Logo1.png'
import "../css/navbar.css" 
import Button from 'react-bootstrap/Button';

function NavBar() {
  // const btn1={
    
  // }
  // const btn2={
  //   backgroundColor:'#ddac17'
  // }
  return(
    <>
    <header>
    <nav class="navbars">
      <img src={Logo1} alt="logo"/>
    <ul>
        <li><Link to="/" style={{textDecoration:'none'}}><p>Home</p></Link></li>
        <li><Link to="/template" style={{textDecoration:'none'}}><p>Templates</p></Link></li>
        <li><Link to="/resume" style={{textDecoration:'none'}}><p>Resume</p></Link></li>
        <li><Link to="/login" style={{textDecoration:'none'}}><p>Login</p></Link></li>
        {/* <li><Link to="/signup" style={{textDecoration:'none'}}><p>SignUp</p></Link></li> */}
        <li><Link to="/register"  style={{textDecoration:'none'}}><p>Register</p></Link></li>
        {/* <li><Link to="/login"> <Button variant="outline-warning" style={btn1}>Login</Button>{' '}</Link></li>
        <li><Link to="/signup"><Button variant="warning" style={btn2}>SignUp</Button>{' '}</Link></li> */}
    </ul>
</nav>
</header>
</>
  )
}
export default NavBar