import React, { useEffect, useState} from 'react'
import cstyle from "../css/Editor.module.css";
import { InputControl } from './InputControl';
import {X} from "react-feather"


export function Editor(props){
    const sections=props.sections;
    const information = props.information;
    
    const [activeSectionKey, setActiveSectionkey] = useState(Object.keys(sections)[0]);

    const [activeInformation, setActiveInformation] =useState(
      information[sections[Object.keys(sections)[0]]]
    )

    const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]])

    const[values, setValues]= useState({
      name:activeInformation?.detail?.name || "",
      title:activeInformation?.detail?.title || "",
      linkedin:activeInformation?.detail?.linkedin || "",
      github:activeInformation?.detail?.github || "",
      phone:activeInformation?.detail?.phone || "",
      email:activeInformation?.detail?.email || "",
    })

    const handlePointUpdate =(value,index)=>
    {
      const tempValues={...values}
      if(!Array.isArray(tempValues.points))tempValues.points =[];
      tempValues.points[index]=value
      setValues(tempValues)
    }

    const [activeDetailIndex,setActiveDetailIndex]=useState(0)

  const workExpBody=(
    <div className={cstyle.detail}>
      <div className={cstyle.row}>
        <InputControl label="Title" placeholder="Enter title eg. Frontend developer"
        value={values.title} 
        onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}/>
        <InputControl label="Company Name" placeholder="Enter company name eg. amazon"
         value={values.companyName}
         onChange={(event)=>setValues(prev=>({...prev,companyName:event.target.value}))} />
      </div>
      <div className={cstyle.row}>
      <InputControl label="Certificate Link" placeholder="Enter certificate link"
       value={values.certificateLink} 
       onChange={(event)=>setValues(prev=>({...prev,certificateLink:event.target.value}))}/>
      <InputControl label="Location" placeholder="Enter Location eg. Remote"
       value={values.location} 
       onChange={(event)=>setValues(prev=>({...prev,location:event.target.value}))}/>
      </div>
      <div className={cstyle.row}>
      <InputControl  type="date" label="Start Date" placeholder="Enter start date of work"
       value={values.startDate} 
       onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}/>
      <InputControl type="date"label="End Date" placeholder="Enter end date of work"
       value={values.endDate} 
       onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}/>
      </div>
      <div className={cstyle.column}>
      <label>Enter work description</label>
      <InputControl placeholder="Link 1"
       value={values.points ? values.points[0]: ""} 
       onChange={(event)=>handlePointUpdate(event.target.value,0)}/>
      <InputControl placeholder="Link 2"
       value={values.points ? values.points[1]: ""}
       onChange={(event)=>handlePointUpdate(event.target.value,0)}/>
       <InputControl placeholder="Link 3"
       value={values.points ? values.points[2]: ""}
       onChange={(event)=>handlePointUpdate(event.target.value,0)} />
       </div>
    </div>
  );

  const projectBody =(
    <div className={cstyle.detail}>
       <div className={cstyle.row}>
        <InputControl label="Title" placeholder="Enter title  of project"
         value={values.title}
         onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}/>
        <InputControl label="Overview" placeholder="Enter basic overview of project"
         value={values.overview}
         onChange={(event)=>setValues(prev=>({...prev,overview:event.target.value}))}/>

       </div>
       <div className={cstyle.row}>
        <InputControl label="Deployed Link" placeholder="Enter deployed link of project"
         value={values.deployedLink}
         onChange={(event)=>setValues(prev=>({...prev,deployedLink:event.target.value}))}/>
        <InputControl label="Github Link" placeholder="Enter github link of project"
         value={values.githubLink}
         onChange={(event)=>setValues(prev=>({...prev,githubLink:event.target.value}))}/>
       </div>
       <div className={cstyle.column}>
       <label>Enter project description</label>
      <InputControl placeholder="Link 1"
          value={values.points ? values.points[0]: ""}
          onChange={(event)=>handlePointUpdate(event.target.value,0)} />
      <InputControl placeholder="Link 2"
          value={values.points ? values.points[1]: ""} 
          onChange={(event)=>handlePointUpdate(event.target.value,1)}/>
      <InputControl placeholder="Link 3"
          value={values.points ? values.points[2]: ""} 
          onChange={(event)=>handlePointUpdate(event.target.value,2)}/>
       </div>
    </div>
  )

  const educationBody =(
    <div className={cstyle.detail}>
      <div className={cstyle.row}>
        <InputControl label="Title" placeholder="Enter title eg. B-tech"
        value={values.title} 
        onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}/>
      </div>
      <InputControl label="College/School" placeholder="Enter name of your college/school"
      value={values.college}
      onChange={(event)=>setValues(prev=>({...prev,college:event.target.value}))}/>
       <div className={cstyle.row}>
        <InputControl label="Start Date" type="date" placeholder="Enter start date of this education"
        value={values.startDate}
        onChange={(event)=>setValues(prev=>({...prev,startDate:event.target.value}))}/>
        <InputControl label="End Date" type="date" placeholder="Enter End date of this education"
        value={values.endDate}
        onChange={(event)=>setValues(prev=>({...prev,endDate:event.target.value}))}/>

       </div>
    </div>
  )
  const basicInfoBody =(
         <div className={cstyle.detail}>
          <div className={cstyle.row}>
           <InputControl label="Name" placeholder="Enter your full name"
           value={values.name}
           onChange={(event)=>setValues(prev=>({...prev,name:event.target.value}))}/>
           <InputControl  label="Title" placeholder="Enter your title eg.frontend developer"
           value={values.title}
           onChange={(event)=>setValues(prev=>({...prev,title:event.target.value}))}/>
          </div>
          <div className={cstyle.row}>
            <InputControl label="Linked Link" placeholder="Enter your linkedin profile link"
            value={values.linkedin}
            onChange={(event)=>setValues(prev=>({...prev,linkedin:event.target.value}))}/>
            <InputControl label="Github Link" placeholder="Enter your github profilr link"
            value={values.githubLink}
            onChange={(event)=>setValues(prev=>({...prev,github:event.target.value}))}/>
          </div>
          <div className={cstyle.row}>
            <InputControl label="Email" placeholder="Enter yor email" 
            value={values.email}
            onChange={(event)=>setValues(prev=>({...prev,email:event.target.value}))}/>
            <InputControl label="Enter Phone" placeholder="Enter your phone number"
            value={values.phone} 
            onChange={(event)=>setValues(prev=>({...prev,phone:event.target.value}))}/>
          </div>
         </div>
  )

  const achievementBody=(
    <div className={cstyle.detail}>
      <div className={cstyle.column}>
        <label>List your achievements</label>
        <InputControl placeholder="Line 1"
        value={values.points ? values.points[0]: ""} 
        onChange={(event)=>handlePointUpdate(event.target.value,0)} />
        <InputControl placeholder="Line 2"
        value={values.points ? values.points[1]: ""} 
        onChange={(event)=>handlePointUpdate(event.target.value,1)} />
        <InputControl placeholder="Line 3"
        value={values.points ? values.points[2]: ""} 
        onChange={(event)=>handlePointUpdate(event.target.value,2)} />
      </div>
    </div>
  )
const summaryBody=(
  <div className={cstyle.detail}>
   <InputControl label="Summary" placeholder="Enter your objective/summary"
   value={values.summary}
   onChange={(event)=>setValues(prev=>({...prev,summary:event.target.value}))}/>
  </div>
)
const otherBody=(
  <div className={cstyle.detail}>
   <InputControl label="Other" placeholder="Enter Something"
   value={values.other}
   onChange={(event)=>setValues(prev=>({...prev,other:event.target.value}))}/>
  </div>
)


const generateBody =() =>
{
  switch(sections[activeSectionKey])
  {
    case sections.basicInfo:
      return basicInfoBody;
    case sections.workExp:
      return workExpBody;
    case sections.project:
      return  projectBody;
    case sections.education:
      return educationBody;
    case sections.achievement:
      return achievementBody;
    case sections.summary:
      return summaryBody;
    case sections.other:
      return otherBody;
    default: 
    return null;
  }
}

const handleSubmission=()=>
{
  switch(sections[activeSectionKey])
  {
    case sections.basicInfo:
      {
        const tempDetails={
          name:values.name,
          title:values.title,
          linkedin:values.linkedin,
          github:values.github,
          email:values.email,
          phone:values.phone,
        }
        props.setInformation(prev=>({...prev,[sections.basicInfo]:
        {...prev[sections.basicInfo],
          detail: tempDetails,

        }}))  
      break;
    }
    case sections.workExp: {
      const tempDetail = {
        certificationLink: values.certificationLink,
        title: values.title,
        startDate: values.startDate,
        endDate: values.endDate,
        companyName: values.companyName,
        location: values.location,
        points: values.points,
      };
      const tempDetails = [...information[sections.workExp]?.detail];
      tempDetails[activeDetailIndex] = tempDetail;

      props.setInformation((prev) => ({
        ...prev,
        [sections.workExp]: {
          ...prev[sections.workExp],
          detail: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.project: {
      const tempDetail = {
        link: values.link,
        title: values.title,
        overview: values.overview,
        github: values.github,
        points: values.points,
      };
      const tempDetails = [...information[sections.project]?.detail];
      tempDetails[activeDetailIndex] = tempDetail;

      props.setInformation((prev) => ({
        ...prev,
        [sections.project]: {
          ...prev[sections.project],
          detail: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.education: {
      const tempDetail = {
        title: values.title,
        college: values.college,
        startDate: values.startDate,
        endDate: values.endDate,
      };
      const tempDetails = [...information[sections.education]?.detail];
      tempDetails[activeDetailIndex] = tempDetail;

      props.setInformation((prev) => ({
        ...prev,
        [sections.education]: {
          ...prev[sections.education],
          detail: tempDetails,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.achievement: {
      const tempPoints = values.points;

      props.setInformation((prev) => ({
        ...prev,
        [sections.achievement]: {
          ...prev[sections.achievement],
          points: tempPoints,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.summary: {
      const tempDetail = values.summary;

      props.setInformation((prev) => ({
        ...prev,
        [sections.summary]: {
          ...prev[sections.summary],
          detail: tempDetail,
          sectionTitle,
        },
      }));
      break;
    }
    case sections.other: {
      const tempDetail = values.other;

      props.setInformation((prev) => ({
        ...prev,
        [sections.other]: {
          ...prev[sections.other],
          detail: tempDetail,
          sectionTitle,
        },
      }));
      break;
    }
  }
}

useEffect(()=>{
  const activeInfo=information[sections[activeSectionKey]]
  setActiveInformation(activeInfo);
  setSectionTitle(sections[activeSectionKey]);
  setActiveDetailIndex(0);
  setValues({
    name: activeInfo?.detail?.name || "",
    overview: activeInfo?.detail
      ? activeInfo.detail[0]?.overview || ""
      : "",
    link: activeInfo?.detail ? activeInfo.detail[0]?.link || "" : "",
    certificationLink: activeInfo?.detail
      ? activeInfo.detail[0]?.certificationLink || ""
      : "",
    companyName: activeInfo?.detail
      ? activeInfo.detail[0]?.companyName || ""
      : "",
    college: activeInfo?.detail
      ? activeInfo.detail[0]?.college || ""
      : "",
    location: activeInfo?.detail
      ? activeInfo.detail[0]?.location || ""
      : "",
    startDate: activeInfo?.detail
      ? activeInfo.detail[0]?.startDate || ""
      : "",
    endDate: activeInfo?.detail ? activeInfo.detail[0]?.endDate || "" : "",
    points: activeInfo?.detail
      ? activeInfo.detail[0]?.points
        ? [...activeInfo.detail[0]?.points]
        : ""
      : activeInfo?.points
      ? [...activeInfo.points]
      : "",
    title: activeInfo?.detail
      ? activeInfo.detail[0]?.title || ""
      : activeInfo?.detail?.title || "",
    linkedin: activeInfo?.detail?.linkedin || "",
    github: activeInfo?.detail
      ? activeInfo.detail[0]?.github || ""
      : activeInfo?.detail?.github || "",
    phone: activeInfo?.detail?.phone || "",
    email: activeInfo?.detail?.email || "",
    summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    
  })
}, [activeSectionKey])

useEffect(()=>
{
  setActiveInformation(information[sections[activeSectionKey]])
},[information])

const handleAddNew = () =>
{
  const detail =activeInformation?.detail;
  if(!detail) return;
  const lastDetail =detail.slice(-1)[0]
  if(!Object.keys(lastDetail).length) return;
  detail?.push({});

  props.setInformation((prev)=>({...prev,[sections[activeSectionKey]]:
    {...information[sections[activeSectionKey]],
    detail:detail,
    },
  }));
  setActiveDetailIndex(detail?.length - 1);
}

const handleDeleteDetail = (index) => {
  const detail = activeInformation?.detail
    ? [...activeInformation?.detail]
    : "";
  if (!detail) return;
  detail.splice(index, 1);
  props.setInformation((prev) => ({
    ...prev,
    [sections[activeSectionKey]]: {
      ...information[sections[activeSectionKey]],
      detail: detail,
    },
  }));

  setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
};

useEffect(() => {
  const detail = activeInformation?.detail;
  if (!detail) return;

  const activeInfo = information[sections[activeSectionKey]];
  setValues({
    overview: activeInfo.detail[activeDetailIndex]?.overview || "",
    link: activeInfo.detail[activeDetailIndex]?.link || "",
    certificationLink:
      activeInfo.detail[activeDetailIndex]?.certificationLink || "",
    companyName: activeInfo.detail[activeDetailIndex]?.companyName || "",
    location: activeInfo.detail[activeDetailIndex]?.location || "",
    startDate: activeInfo.detail[activeDetailIndex]?.startDate || "",
    endDate: activeInfo.detail[activeDetailIndex]?.endDate || "",
    points: activeInfo.detail[activeDetailIndex]?.points || "",
    title: activeInfo.detail[activeDetailIndex]?.title || "",
    linkedin: activeInfo.detail[activeDetailIndex]?.linkedin || "",
    github: activeInfo.detail[activeDetailIndex]?.github || "",
    college: activeInfo.detail[activeDetailIndex]?.college || "",
  });
}, [activeDetailIndex]);


  return (
    <>
    <div className={cstyle.edit}>
        <div className={cstyle.edit_header}>
      {Object.keys(sections)?.map((key) => ( <div className={`${cstyle.edit_section} ${
              activeSectionKey === key ? cstyle.active : ""
            }`}
      key={key}
      onClick={()=>setActiveSectionkey(key)}
      >
      
       {sections[key]}
     </div>
     ))}
    </div>

    <div className={cstyle.edit_body}>
      <InputControl label="Title" placeholder="Enter Section title" value={sectionTitle} 
      onChange={(event)=>setSectionTitle(event.target.value)}
      />
      
      <div className={cstyle.chips}>
          {
            activeInformation?.details?
            activeInformation?.details?.map((item,index) =>(
              <div className={`${cstyle.chip} ${activeDetailIndex === index ? cstyle.active:""}`} 
              key={item.title + index}
              onClick={() =>setActiveDetailIndex(index)}
              >
                <p>
                {sections[activeSectionKey]} {index + 1}
                </p>
               <X   onClick={(event) => {
                      event.stopPropagation();
                      handleDeleteDetail(index);
                    }}/>
               </div>
            ))
          : "" }
         
         {
         activeInformation?.detail &&
          activeInformation?.detail?.length > 0 ? (
            <div className={cstyle.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
      
      {generateBody()}

      <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
    </>
  )
}
