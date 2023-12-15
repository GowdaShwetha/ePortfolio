import React, { useState , useEffect, useRef} from 'react'
import cstyle from "../css/ResumeTemp.module.css";
import * as Icon from "react-bootstrap-icons"
import { AtSign, GitHub , Phone, Linkedin, MapPin} from 'react-feather';
import { forwardRef } from 'react';


export const ResumeTemplate = forwardRef((props, ref) => {

    const information=props.information;
    const sections =props.sections;
    const containerRef =useRef();

     const [columns, setColumns]= useState([[],[]]);
     const [source, setSource] =useState("")
     const [target,setTarget] = useState("")
    
   


    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        education: information[sections.education],
        achievement: information[sections.achievement],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        other: information[sections.other],
    }
     const getFormattedDate=(value) =>{
      if(!value) return ""
      const date=new Date(value)

      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }


  
    const sectionDiv={
      [sections.workExp]:   <div key={"workexp"} 
      draggable
      onDragOver={()=>setTarget(info.workExp?.id)}
      onDragEnd={()=>setSource(info.workExp?.id)}
      className={`${cstyle.section} ${info.workExp?.sectionTitle? "": cstyle.hidden}`}>
        <div className={cstyle.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={cstyle.content}>
          {
            info.workExp?.detail?.map((item) => (
              <div className={cstyle.item} key={item.title}>
                {
                  item.title && (
                  <p className={cstyle.title}>{item.title}</p>
                )}
                {item.companyName && (
                    <p className={cstyle.subTitle}>{item.companyName}</p>
                )}
                {item.certificationLink && (
                      <a className={cstyle.link} href={item.certificationLink}>
                        <Icon.Paperclip/>{item.certificationLink}</a>
                )}
          
                {item.startDate && item.endDate ? (
                       <div className={cstyle.date}>
                       <Icon.Calendar/>{" "}
                       {getFormattedDate(item.startDate)}-{
                       getFormattedDate(item.endDate)}
                       </div>
                ) : (
                  ""
                )}
                {item.location && (
                 <p className={cstyle.date}><MapPin/> Remote</p>
                )}
               {item.points?.length > 0 && (
                 <ul className={cstyle.points}>
                  {item.points?.map((elem,index) =>(
                      <li className={cstyle.point} key={elem + index}>{elem}</li>
                  ))}
                    </ul>
               )}
          </div>
            ))}
          </div>
        </div>,
      [sections.project]:   <div  key={"project"} 
      draggable 
      onDragOver={()=>setTarget(info.project?.id)}
      onDragEnd={()=>setSource(info.project?.id)}
      className={`${cstyle.section} ${info.project?.sectionTitle? "": cstyle.hidden}`}>
        <div className={cstyle.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={cstyle.content}>
          {
            info.project?.detail?.map(item =>
              <div className={cstyle.item}>
                {item.title && <p className={cstyle.title}>{item.title}</p>}
                {item.link && (
                     <a className={cstyle.link} href={item.link}><Icon.Paperclip/>{item.link}</a>
                )}
                {item.github && (
                      <a className={cstyle.link} href={item.github}><Icon.Github/>{item.github}</a>
                )}
                {item.overview && (
                   <p className={cstyle.overview}>{item.overview} </p>
                )}
                {item.points?.length >0 &&(
                  <ul className={cstyle.points}>
                    {item.points?.map((elem, index) =>(
                    <li className={cstyle.point} key={elem + index}>{elem}</li>
                    ))}
                 </ul>
                )}
                 </div>
              )}
        </div>
      </div>,
      [sections.education]:  <div  key={"education"} 
      draggable 
      onDragOver={()=>setTarget(info.education?.id)}
      onDragEnd={()=>setSource(info.education?.id)}
      className={`${cstyle.section} ${info.education?.sectionTitle? "": cstyle.hidden}`}>
        <div className={cstyle.sectionTitle}>{info.education?.sectionTitle}</div>
        <div className={cstyle.content}>
          {info.education?.detail?.map((item) =>
          (
            <div className={cstyle.item}>
              {item.title &&<p className={cstyle.title}>{item.title}</p>}
              {item.college &&  <p className={cstyle.subTitle}>{item.college}</p>}
              {item.startDate && item.endDate && 
                       <div className={cstyle.date}>
                       <Icon.Calendar/>{" "}
                       {getFormattedDate(item.startDate) }-{
                       getFormattedDate(item.endDate)}
                       </div>
                }
              </div>
              ))}
        </div>
      </div>,
      [sections.achievement]:<div   key={"achievement"}  
      draggable 
      onDragOver={()=>setTarget(info.achievement?.id)}
      onDragEnd={()=>setSource(info.achievement?.id)}
      className={`${cstyle.section} ${info.achievement?.sectionTitle? "": cstyle.hidden}`}>
        <div className={cstyle.sectionTitle}>{info.achievement?.sectionTitle}</div>
        <div className={cstyle.content}>
          {info.achievement?.points?.length >0 && (
            <ul className={cstyle.numbered}>
              {info.achievement?.points?.map((elem, index)=>(
               <li className={cstyle.point} key={elem + index}>{elem}</li>
              ))}
            </ul>
          )}
        </div>
      </div>,
      [sections.summary]:<div  key={"summary"}  
      draggable 
      onDragOver={()=>setTarget(info.summary?.id)}
      onDragEnd={()=>setSource(info.summary?.id)}
      className={`${cstyle.section} ${info.summary?.sectionTitle? "": cstyle.hidden}`}>
        <div className={cstyle.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={cstyle.content}>
          <p className={cstyle.overview}>{info.summary?.summary}</p>
        </div>
      </div>,
      [sections.other]:<div key={"other"} 
      onDragOver={()=>setTarget(info.other?.id)}
      onDragEnd={()=>setSource(info.other?.id)}
      className={`${cstyle.section} ${info.other?.sectionTitle? "": cstyle.hidden}`}>
        <div className={cstyle.sectionTitle}>{info.other?.sectionTitle}</div>
        <p className={cstyle.overview}>{info.other?.other}</p>
      </div>,
    }

  const swapSourceTarget =(source,target)=>
  {

    if(!source || !target) return;
    const tempColumns=[[...columns[0]],[...columns[1]]];
    
    let sourceRowIndex = tempColumns[0].findIndex((item)=>item === source);
    let sourceColumnIndex =0;
    if(sourceRowIndex<0)
    {
    sourceColumnIndex=1;
    sourceRowIndex =tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) =>item === target);
    let targetColumnIndex =0;
    if(targetRowIndex<0)
    {
    targetColumnIndex=1;
    targetRowIndex =tempColumns[1].findIndex((item) => item === target);
    }
    const tempSource=tempColumns[sourceColumnIndex][sourceRowIndex]
     tempColumns[sourceColumnIndex][sourceRowIndex] =tempColumns[targetColumnIndex][targetRowIndex] 

     tempColumns[targetColumnIndex][targetRowIndex] =tempSource

     setColumns(tempColumns)


  }


   useEffect(()=>
   {
    setColumns([
        [sections.project,sections.education,sections.summary],

        [sections.workExp,sections.achievement,sections.other],
    ]);
   }, []);
  
   useEffect(()=>
   {
     swapSourceTarget(source,target)
   },[source])

   useEffect(()=>
   {
    const container = containerRef.current;
      if(!props.activeColor || !container) return;

      container.style.setProperty('color',props.activeColor)

   },[props.activeColor]);

  return (
    <>

    <div ref={ref}>
    <div ref={containerRef} className={cstyle.container}>
        <div className={cstyle.head}>

          <p className={cstyle.heading}>{info.basicInfo?.detail.name}</p>
          <p className={cstyle.subHeading}>{info.basicInfo?.detail?.title}</p>

          <div className={cstyle.links}>
            {
              info.basicInfo?.detail?.email && 
             <a className={cstyle.link} type="email"><Icon.Envelope/>{info.basicInfo?.detail?.email}</a> 

            }
            {
              info.basicInfo?.detail?.phone &&
              <a className={cstyle.link}><Icon.Phone/>{info.basicInfo?.detail?.phone}</a>
            }
            {
              info.basicInfo?.detail?.linkedin &&
              <a className={cstyle.link}> <Icon.Linkedin/>{info.basicInfo?.detail?.linkedin}</a>
            }
               
          </div>
        </div>
        <div className={cstyle.main}>
        <div className={cstyle.col1}>
            {
              columns[0].map(item=>sectionDiv[item])
            }
        </div>
        <div className={cstyle.col2}>
          {
           columns[1].map(item=>sectionDiv[item])
         }
         </div>
           
        </div>
    </div>
    </div>
    </>
  )

});
