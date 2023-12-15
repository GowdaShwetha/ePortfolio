import React from "react";


import "../css/home.css"
import NavBar from "./NavBar";
// import * as Icon from 'react-bootstrap-icons';
import Template from "./Template";
import { DashBoard } from "./DashBoard";
import { Footer } from "./Footer";
import { Resume } from "./Resume";
import  {Link} from 'react-router-dom'

import { TempPdf } from "./Temps/TempPdf";


const Home=()=>
{
        return(
            <>
    <NavBar/>
   
    <section class="home" id="home">
        <div class="content">   
        <div class="tex">
        <h1>Build Custom Portfolio</h1>
        <h2>for your Career,</h2>
        <h3>Empower Success <span class="dot"></span></h3> 

        <Link to="/register"><button class="googlebtn">Register</button></Link>
        <Link to="/login"><button class="emailbtn">Login</button></Link>
      
        {/* <button class="googlebtn"><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="url(#grad1)" class="bi bi-google" viewBox="0 0 16 16">
           <defs>
           <linearGradient id="grad1" x1="0%" y1="0%" x2="130%" y2="0%">
           <stop offset="0%" style={{ stopColor: '#EA4335', stopOpacity: 1 }} />
           <stop offset="45%" style={{ stopColor: '#FBBC05', stopOpacity: 1 }} />
           <stop offset="45%" style={{ stopColor: '#34A853', stopOpacity: 1 }} />
           </linearGradient>
           </defs>
           <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>&nbsp;&nbsp;&nbsp;</span>Continue with Google</button>           
        <button class="emailbtn">SignUp with email</button> */}
            </div> 
            
            <div class="pic">
            <img src="https://i.pinimg.com/564x/6b/59/f4/6b59f4e858aed1e153debe9b621bfe0b.jpg"/>
            </div>
            </div>

    </section>
    {/* <section id="home">
        <div class="info">
           
            <h1>Build Custom Portfilo For your Career,Empower Success<span class="dot" color="pink"></span></h1>
            
           <button class="googlebtn"><a href="#"><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="url(#grad1)" class="bi bi-google" viewBox="0 0 16 16">
           <defs>
           <linearGradient id="grad1" x1="0%" y1="0%" x2="130%" y2="0%">
           <stop offset="0%" style={{ stopColor: '#EA4335', stopOpacity: 1 }} />
           <stop offset="45%" style={{ stopColor: '#FBBC05', stopOpacity: 1 }} />
           <stop offset="45%" style={{ stopColor: '#34A853', stopOpacity: 1 }} />
           </linearGradient>
           </defs>
           <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>&nbsp;&nbsp;&nbsp;</span>Continue with Google</a></button>           
            <button class="emailbtn"><a href="#">SignUp with email</a></button>
        </div>
         
    </section> */}
        {/* <TempPdf/> */}
    <Template/>
    <Resume/>
    <Footer/>
    </>
        );
}

export default Home