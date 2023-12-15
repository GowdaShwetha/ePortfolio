import React from 'react'
// import tstyle from "./Temp01.module.css"
import "../Temps/TempStyle.css"
import { useRef , useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html2pdf from 'html2pdf.js';

import { InputBox } from './InputBox';
import CircleProgressBar from './CircleProgressBar';
import Container from 'react-bootstrap/esm/Container';
import { Input } from '../Input';

function Temp01(props) {
  const TempSections=props.TempSections;
   const inputRef=useRef(null);

   const [percentage, setPercentage] =useState(90);
   const [percentage2, setPercentage2] =useState(30);
   const [percentage3, setPercentage3] =useState(70);
   const [percentage4, setPercentage4] =useState(40);


    const handleImageClick =() =>
    {
       inputRef.current.click();
    }

    const convertToPDF = () => {
      const element = document.getElementById('TempDesgin1'); // replace 'single-page-content' with the ID of your root element
      
      html2pdf(element);
    };

  return (
    <>
    <div id="TempDesgin1">
        <div class="temp_edit">
        <div class="temp_header">
       <div class="nav_bar1"> 
            <p class="logo1"><Input text="Name"  placeholder="Name" className="logo2" style={{color:'#FFC000',size:'10px'}}/></p>
                <ul>
                    <a href="#Home1">Home</a>
                    <a href="#About1">About</a>
                    <a href="#Service1">Service</a>
                    <a href="#Skills1">Skills</a>
                    <a href="#Education1">Education</a>
                   
                </ul>
            </div>
        </div>
        <div id="Home1" class="Home1">
        <div class="info">
               <h6 class="h1"><InputBox  placeholder="I'M A" /></h6>
               <h1 class="h1"><InputBox  placeholder="FULL STACK" /></h1>
                <h1 class="h11"><span class="span"><InputBox  placeholder="JAVA"/></span></h1>
                <p class="h1"><InputBox  placeholder="DEVELOPER."></InputBox></p>
          </div>
          <div class="self1" onClick={handleImageClick}>
             {/* <img src="https://i.pinimg.com/564x/9b/9b/7f/9b9b7fdcb946b9956d31b65199cf1394.jpg"/> */}
             <img src="https://i.pinimg.com/564x/6d/20/f3/6d20f3512ab5172776ce39d74c950398.jpg"/>

             <input type="file" ref={inputRef} style={{display:'none'}}/>
          </div>
        </div>
        <div id="About1" class="About1">
                <h1 class="about-h1"><InputBox placeholder="About me" style={{color:'#FDD023'}}/></h1>
              <div class="about-me">
                <div class="photo" onClick={handleImageClick}>
                {/* <img src="https://i.pinimg.com/236x/ea/13/7e/ea137e436e087c0bee9810dd8d0f4c94.jpg"/> */}
                <img src="https://i.pinimg.com/564x/ac/6e/7c/ac6e7cec052c4acc9e663d638da57cf6.jpg"/>
                <input type="file" ref={inputRef} style={{display:'none'}}/>
                 </div>
                <div class="me">
                  <p class="text">
                  <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem doloribus voluptate animi odit culpa velit eveniet. Sit, eveniet adipisci. 
                  Facere ducimus sint quam quisquam laborum neque incidunt, perspiciatis soluta delectus."
                  style={{ width: '600px', height: '270px', color:'black'}}/>
                  </p>
                  </div>
                  </div>
        </div>

        <div class="Service1" id="Service1">
          <div>
          <h1 class="about-h1"><InputBox placeholder="What I do" style={{color:'#FDD023'}}/></h1>
            <hr style={{width:'150px',borderTop:'6px solid #FD7F20',marginLeft:'40%'}}/><br/>
            <p><teaxtarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet. Sit, eveniet adipisci." 
            style={{ width: '200px', height: '50px', color:'black'}}/></p>
          </div>
          <div>
            <Container>
              <Row>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Desginer"/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'black'}}/></p>
              </div>
                </Col>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Web Developer"/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'black'}}/></p>
              </div>
                </Col>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Digital Marketing"/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'black'}}/></p>
              </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div class="Skills1" id="Skills1">
          <h1 class="about-h1"><InputBox placeholder="Skills" style={{color:'#FDD023'}}/></h1>
            <Container style={{marginLeft:'8%', padding:'5%'}}>
                <Row>
                <Col><InputBox  placeholder="Java" /></Col>
                <Col><InputBox  placeholder="React" /></Col>
                <Col><InputBox  placeholder="SQL" /></Col>
                <Col><InputBox  placeholder="PHP" /></Col>
                </Row>
                <Row>
                <Col><CircleProgressBar percentage={percentage} circleWidth="200"/>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage(ev.target.value)}/></p> </Col>
                <Col><CircleProgressBar percentage={percentage2} circleWidth="200"/>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage2(ev.target.value)}/></p> </Col>
                <Col><CircleProgressBar percentage={percentage3} circleWidth="200"/>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage3(ev.target.value)}/></p> </Col>
                <Col><CircleProgressBar percentage={percentage4} circleWidth="200"/>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage4(ev.target.value)}/></p> </Col>
                </Row>
                </Container>
        </div>

        <div class="Education1" id="Education1">
          <h1 class="about-h1"><InputBox placeholder="Education" style={{color:'#FDD023'}}/></h1>
          <div class="educ">
          <Container>
            <Row>
              <Col>
              <div>
              <p class="h2"><InputBox placeholder="MCA"/></p>
              <p class="p"><InputBox placeholder="Jain Uniersity"/></p>
              <p class="p"><InputBox placeholder="85%"/></p><br/><br/>
              </div>
              </Col>
              {/* <Col>
              <div id="vertical-line"></div>
              </Col> */}
              <Col>
              <div>
              <h2 class="h2"><InputBox placeholder="BCA"/></h2>
              <p class="p"><InputBox placeholder="Jain Uniersity"/></p>
              <p class="p"><InputBox placeholder="85%"/></p><br/><br/>
             </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
              <div>
              <h2 class="h2"><InputBox placeholder="PUC"/></h2>
              <p class="p"><InputBox placeholder="Jain Uniersity"/></p>
              <p class="p"><InputBox placeholder="85%"/></p><br/><br/>
              </div>
              </Col>
              {/* <Col>
              <div id="vertical-line"></div>
              </Col> */}
              <Col>
              <div>
              <h2 class="h2"><InputBox placeholder="SSLC"/></h2>
              <p class="p"><InputBox placeholder="Jain Uniersity"/></p>
              <p class="p"><InputBox placeholder="85%"/></p><br/><br/>
             </div>
              </Col>
            </Row>
          </Container>
          </div>
          </div>
          <br/> <br/>

        <div class="Tempfoot1">
        <div class="footerStyle">
        <div class="footer-content">
        <h4><InputBox placeholder="Project Name" style={{background:'#FFC000', border:'0px solid #FFC000',color:'black'}}/></h4>
        <p>
            <InputBox placeholder="I am a Full Stack Developer" style={{width:'300px',background:'#FFC000', border:'0px solid #FFC000'}}/></p>
        <p>    
        <InputBox placeholder="Desgination" style={{width:'300px',background:'#FFC000', border:'0px solid #FFC000'}}/>
        </p>
        <div class="footer-bottom">
        <p><InputBox placeholder="copyright & copy;2023 project .designed by" style={{width:'300px',color:'white',background:'#3c4047', border:'0px solid #3c4047'}}/>
        <span><InputBox placeholder="Name" style={{color:'white',background:'#3c4047', border:'0px solid #3c4047'}}/></span></p>
        </div>
        </div>
        </div>
        </div>
          </div>
      </div>
     <button onClick={convertToPDF} class="Tempbtn">Convert to PDF</button>

    </>
  )
}

export default Temp01
































// import React from 'react'
// // import tstyle from "./Temp01.module.css"
// import "../Temps/TempStyle.css"
// import { useRef , useState} from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import html2pdf from 'html2pdf.js';

// import { InputBox } from './InputBox';
// import CircleProgressBar from './CircleProgressBar';
// import Container from 'react-bootstrap/esm/Container';

// function Temp01(props) {
//   const TempSections=props.TempSections;

//    const inputRef=useRef(null);

//    const [percentage, setPercentage] =useState(50);

//    const [activeSectionKey, setActiveSectionkey] = useState(Object.keys(TempSections)[0]);



//     // const [sectionTitle, setSectionTitle] = useState(TempSections[Object.keys(TempSections)[0]])

//     const handleImageClick =() =>
//     {
//        inputRef.current.click();
//     }

//     const convertToPDF = () => {
//       const element = document.getElementById('TempDesgin1'); // replace 'single-page-content' with the ID of your root element
      
//       html2pdf(element);
//     };

//     const homeBody = (
//         <div class="detail">
//           <div class="Home1">
//           <div class="info">
//                <h6 class="h6"><InputBox  placeholder="I'm a" /></h6>
//                <h1 class="h1"><InputBox  placeholder="Full Stack" /></h1>
//                <h1 class="h1"><span class="span"><InputBox  placeholder="Java"/></span></h1>
//                <h1 class="h1"><InputBox  placeholder="Developer" /></h1><span class="dot"></span>
//           </div>
//           <div class="self1" onClick={handleImageClick}>
//              <img src="https://i.pinimg.com/564x/9b/9b/7f/9b9b7fdcb946b9956d31b65199cf1394.jpg"/>
//              <input type="file" ref={inputRef} style={{display:'none'}}/>
//           </div>
//         </div>
//         </div>
//     );
//     const aboutBody =(
//       <div class="about">
//          <h1 class="about-h1">About Me</h1>
//          <div class="about-me">
//        <div class="photo">
//        <img src="./images/shwetha2.jpg"/>
//      </div>
//     <div class="me">
//         <p><InputBox placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.
//          Laboriosam impedit vitae quisquam autem laborum consectetur,
//          iure fugiat soluta adipisci voluptates? Ut, rerum? Corrupti consequuntur alias dicta, 
//          soluta odit mollitia"/></p>
//      </div>
//       </div>
//       </div>
//     )  
//     const skillsBody=(
//       <div class="skill">
//         <Container>
//           <Row>
//             <Col><InputBox  placeholder="Java" /></Col>
//             <Col><InputBox  placeholder="React" /></Col>
//             <Col><InputBox  placeholder="SQL" /></Col>
//             <Col><InputBox  placeholder="PHP" /></Col>

//           </Row>
//           <Row>
//           <Col><CircleProgressBar percentage={percentage} circleWidth="200"/>
//                <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage(ev.target.value)}/></p> </Col>
//           <Col><CircleProgressBar percentage={percentage} circleWidth="200"/>
//                 <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage(ev.target.value)}/></p> </Col>
//           <Col><CircleProgressBar percentage={percentage} circleWidth="200"/>
//                 <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage(ev.target.value)}/></p> </Col>
//             <Col><CircleProgressBar percentage={percentage} circleWidth="200"/>
//                 <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage(ev.target.value)}/></p> </Col>
//           </Row>
//         </Container>
//           <p><InputBox placeholder="java"/></p>   
//       </div>
//     )
//     const educationBody=(
//           <div class="educ">
//              <div class="degree">
//                 <div>
//                     <h2><InputBox placeholder="MCA"/></h2>
//                     <p></p>
//                     <p><InputBox placeholder="8.5"/></p><br/><br/>
//                 </div>

//                 <div>
//                     <h2><InputBox placeholder="BCA"/></h2>
//                     <p><InputBox placeholder="Jain Uniersity"/></p>
//                     <p><InputBox placeholder="8.5"/></p><br/><br/>
//                 </div>

//                 <div>
//                     <h2><InputBox placeholder="BCA"/></h2>
//                     <p><InputBox placeholder="Jain University"/></p>
//                     <p><InputBox placeholder="8.9"/></p><br/><br/>
//                 </div>
//                 </div>
//                 </div>
//     )
      

//       const generateBody =() =>
//       {
//          switch(TempSections)
//          {
//           case TempSections.home:return homeBody;
//           case TempSections.about:return aboutBody;
//           case TempSections.skills:return skillsBody;
//           case TempSections.education:return educationBody;
//           default:return null;
//          }
//       }

//   return (
//     <>
//     <div id="TempDesgin1">
//         <div class="temp_edit">
//         <div class="temp_header">
//        <div class="nav_bar1"> 
//             <p class="logo1"><InputBox  placeholder="Name" className="logo2"/></p>
//                 <ul>
//                     <a href="#Home1">Home</a>
//                     <a href="#About1">About</a>
//                     <a href="#Skills1">Skills</a>
//                     <a href="#Education1">Education</a>
//                     <a href="#contact1">Contact</a>
//                 </ul>
//             </div>
//         </div>
//         <div id="Home1">
//           {generateBody()}
//         </div>
         
//      </div>
//       </div>
//      <button onClick={convertToPDF}>Convert to PDF</button>

//     </>
//   )
// }

// export default Temp01