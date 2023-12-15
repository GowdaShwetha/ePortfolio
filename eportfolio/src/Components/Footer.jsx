import React from 'react'
import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import "../css/footer.css"
import Logo1 from '../image/Logo1.png'
import Facebook from 'react-bootstrap-icons';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'bootstrap';

export const Footer = () => {
  
  return (
    <>   
    <div class="foot">
       <footer>
          <div class="row1">
            <div class="col1" style={{paddingLeft:'14%'}}>
            <img src={Logo1} class="logo"/>

            <p>Crafting Your Narrative, Building Your Future: Your Portfolio, Your Story.</p>
            </div>
            <div class="col1">
              <p>Bangalore</p>
              <p>Karnataka, PIN 562114, India</p>
              <p class="email-id">shwethagowda252001@gmail.com</p>
            </div>
            <div class="col1">
              <ul>
              <li><Link to="/" style={{textDecoration:'none'}}><p>Home</p></Link></li>
              <li><Link to="/template" style={{textDecoration:'none'}}><p>Templates</p></Link></li>
              <li><Link to="/resume" style={{textDecoration:'none'}}><p>Resume</p></Link></li>
              <li><Link to="/login" style={{textDecoration:'none'}}><p>Login</p></Link></li>
              <li><Link to="/register" style={{textDecoration:'none'}}><p>Register</p></Link></li>
              </ul>
            </div>
            <div class="col1">
              <Icon.Linkedin/>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/shwetha-gowda-9b59412a4/"  target="_blank">LinkedIn</a><br/>
              <Icon.Github/>&nbsp;&nbsp;<a href="https://github.com/GowdaShwetha"  target="_blank">Github</a><br/>
              <Icon.Facebook/>&nbsp;&nbsp;<a href=""  target="_blank">Facebook</a><br/>
              <Icon.Instagram/>&nbsp;&nbsp;<a href=""  target="_blank">Instagram</a><br/>
            </div>
            <div class="col1"></div>
          </div> 
      </footer>
      </div>
    </>
  )
}
