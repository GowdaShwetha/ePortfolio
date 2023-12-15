import React from 'react'
import "../css/resume.css"
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export const Resume = () => {
  const navi=useNavigate();

  const homeNavi=useNavigate()

  const arrow={
    fontSize:"2rem",
    color:"#235784",
    marginLeft:"90%",
    marginTop:"2%",
  }
  return (
    <>
        
    <Icon.ArrowLeftCircleFill onClick={()=>homeNavi("/")} style={arrow}></Icon.ArrowLeftCircleFill>

    <div class="resume-build">
    <h1 class="head1">Resume</h1>
    <section id="resume">
    <div class="head">
            <h1>Create a resume </h1>
            <h1><span class="span">that your dream job</span></h1><br/>
            <h1>will notice <span class="dot"></span></h1>
            <button onClick={()=>navi("/resumebuild")}>Build Your Resume</button>
        </div>
        <div id="resume-img">
            <img src="https://i.pinimg.com/564x/b5/ee/c1/b5eec1f561b0e5b33685ff59c68a3ee6.jpg"/>
        </div>
    </section>
    </div>
    </>
  )
}
