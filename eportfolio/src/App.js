// import logo from './logo.svg';
import './App.css';
import {Route,Routes } from "react-router-dom";
// import {Assign} from "react";

import Home from "../src/Components/Home";
import Template from "../src/Components/Template";
import Community from "../src/Components/Community";
import Login from "../src/Components/Login";
import Signup from "../src/Components/Signup";
import Singelpage from './Components/Singelpage';
// import { Temp1 } from './Components/Temp1';
import { DashBoard } from './Components/DashBoard';
import ListPortfolios from './Components/ListPortfolios';
import CreateUserComponent from './Components/CreateUserComponent';
import { Footer } from './Components/Footer';
import { Resume } from './Components/Resume';
import { Register } from './Components/Register';
import ResumeBuild from './Components/ResumeBuild';
// import Temp2 from './Components/Temp2';
import Temp01 from './Components/Temps/Temp01';
import Temp02 from './Components/Temps/Temp02';
import { Temp03 } from './Components/Temps/Temp03';


function App() {
  return (
    
    <>
  
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/template" element={<Template/>}></Route> 
    <Route path="/community" element={<Community/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path='/single' element={<Singelpage/>}/>
    {/* <Route path="/temp1" element={<Temp1/>}/> */}
    <Route path="/listportfolios" element={<ListPortfolios/>}></Route>
    <Route path="/new-user" element={<CreateUserComponent/>}></Route> 
    <Route path='/dashboard' from element={<DashBoard/>}/>
    <Route path="./footer" element={<Footer/>}></Route>
    <Route path="/resume" element={<Resume/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/resumebuild" element={<ResumeBuild/>}></Route>
    {/* <Route path="temp2" element={<Temp2/>}></Route> */}
    <Route path="/temp01" element={<Temp01/>}></Route>
    <Route path="/temp02" element={<Temp02/>}></Route>
    <Route path="/temp03" element={<Temp03/>}></Route>
    </Routes> 
   
    </>
    
  );
};

export default App;
