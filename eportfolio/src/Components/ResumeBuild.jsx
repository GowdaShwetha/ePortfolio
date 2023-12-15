import React, { useEffect, useRef, useState } from 'react'
import  cstyle from "../css/ResumeBuild.module.css"
import * as Icon from "react-bootstrap-icons"
import {Editor} from "../Components/Editor"
import { ResumeTemplate } from './ResumeTemplate';
import ReactToPrint from "react-to-print";
import  {Link, useNavigate } from 'react-router-dom'


function ResumeBuild(){
    const colors=["#ff033e","#9966cc","#007fff","#0000ff","#006b3c","#002e63","#004b49"];

    const [activeColor,setActiveColor] = useState(colors[0]);
    const resumeRef= useRef();

    const sections = {
        basicInfo:"Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
      };
  
      const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]:{
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]:{
          id: sections.workExp,
          sectionTitle: sections.workExp,
          detail: [],
        },
        [sections.project]:{
          id: sections.project,
          sectionTitle: sections.project,
          detail: [],
        },
        [sections.education]:{
          id: sections.education,
          sectionTitle: sections.education,
          detail: [],
        },
        [sections.achievement]:{
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]:{
          id: sections.summary,
          sectionTitle: sections.summary,
          detail:"",
        },
        [sections.other]:{
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      })

useEffect(()=>
{
  console.log(resumeInformation)
},[resumeInformation])

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

    <h1 className={cstyle.Resume_head}>Resume</h1>
    <div classNamw={cstyle.resume_container}>
        <div className={cstyle.color_palet}>
        {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${cstyle.color_change} ${activeColor === item?cstyle.active:" "}`} 
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint trigger={() =>
        {
          return(
            <div className={cstyle.btn}> <button>Download <Icon.ArrowDown/></button></div>

          );
        }}
        content ={() => resumeRef.current}
        />
       
    </div>
    <div className={cstyle.main}>
        {/* <Editor sections={sections}/> */}
        <Editor sections={sections} 
        information={resumeInformation}
        setInformation={setResumeInformation}/>
        
        <ResumeTemplate sections={sections} 
         information={resumeInformation}
         activeColor={activeColor}
         ref={resumeRef}
         />
    </div>
  
    </>
  )
}

export default ResumeBuild