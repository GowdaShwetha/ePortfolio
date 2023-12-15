import React from 'react'
import Temp01 from './Temp01';

const TempBody = () => {

    const TempSections = {
        home:"Home section",
        about: "about Section",
        project: "Projects",
        skills: "skills",
        education: "education",
        // contact: "contact",
      };

      const [TempInformation, setTempInformation] = useState({
        [TempSections.home]:{
          id: TempSections.home,
          TempSectionTitle: TempSections.home,
          detail: {},
        },
        [TempSections.about]:{
          id: TempSections.about,
          TempSectionTitle: TempSections.about,
          detail: {},
        },
        [TempSections.project]:{
          id: TempSections.project,
          TempSectionTitle: TempSections.project,
          detail: {},
        },
        [TempSections.skills]:{
          id: TempSections.skills,
          TempSectionTitle: TempSections.skills,
          detail: {},
        },
        [TempSections.education]:{
          id: TempSections.education,
          TempSectionTitle: TempSections.education,
          detail: {},
        },
        // [TempSections.contact]:{
        //   id: TempSections.contact,
        //   TempSectionTitle: TempSections.contact,
        //   detail: {},
        // }
      })

  return (
    <>
      <div className={tstyle.temp_container}>
        <div className={tstyle.temp_main}>
          <Temp01 
          TempSections={TempSections}
          TempInformation={TempInformation}/>
        </div>
      </div>
    </>
  )
}

export default TempBody