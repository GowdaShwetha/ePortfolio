import React from 'react'
import "../Temps/TempStyle2.css"
import { useRef , useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html2pdf from 'html2pdf.js';

import { InputBox } from './InputBox';
import CircleProgressBar from './CircleProgressBar';
import Container from 'react-bootstrap/esm/Container';
import { Input } from '../Input';

const Temp02 = () => {
    const inputRef=useRef(null);

    const handleImageClick =() =>
    {
       inputRef.current.click();
    }
    const [percentage, setPercentage] =useState(90);
    const [percentage2, setPercentage2] =useState(30);
    const [percentage3, setPercentage3] =useState(70);
    const [percentage4, setPercentage4] =useState(40);

    const convertToPDF = () => {
      const element = document.getElementById('TempDesgin2'); // replace 'single-page-content' with the ID of your root element
      
      html2pdf(element);
    };

  return (
    <>
    
    <div id="TempDesgin2">
        <div class="temp2_edit">
        <div class="temp2_header">
       <div class="nav_bar2"> 
            <p class="logo2"><Input text="Name"  placeholder="Name" className="logo2" style={{color:'#F83292',size:'10px'}}/></p>
                <ul>
                    <a href="#Home2">Home</a>
                    <a href="#About2">About</a>
                    <a href="#Service2">Acheivement</a>
                    <a href="#Skills2">Skills</a>
                    <a href="#Education2">Education</a>
                   
                </ul>
            </div>
        </div>

        <div class="Home-body">
        <div id="Home2" class="Home2">
        <div class="self2" onClick={handleImageClick}>
             <img src="https://i.pinimg.com/564x/6b/3d/9a/6b3d9a3f10499c9233e0cfdaeb043492.jpg"/>
             <input type="file" ref={inputRef} style={{display:'none'}}/>
        </div>
        <div class="info">
               <h6 class="h6"><InputBox  placeholder="Hey My name is"  
               style={{color:"#B14096",fontWeight: 'bold',fontSize: '1.5rem'}}/></h6>
               <h1 class="h1"><InputBox  placeholder="Shwetha Gowda"  
               style={{width:'600px',color:"#B14096",fontWeight: 'bold',fontSize: '3rem'}}/></h1>
                {/* <h1 class="h11"><span class="span"><InputBox  placeholder="JAVA"/></span></h1> */}
                <p class="h1"><InputBox  placeholder="I am a UI/UX Desginer." 
                style={{width:'800px',color:"#B14096",fontWeight: 'bold',fontSize: '3rem'}}></InputBox></p>
          </div>
          </div>
          </div>

        <div class="About2" id="About2">
        
                <h1 class="about-h2"><InputBox placeholder="About me"
                style={{color:'#F83292'}}/></h1>
                <div class="about-me2"> 
                <div class="me2">
                  <p class="text2">
                  <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem doloribus voluptate animi odit culpa velit eveniet. Sit, eveniet adipisci. 
                  Facere ducimus sint quam quisquam laborum neque incidunt, perspiciatis soluta delectus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem doloribus voluptate animi odit culpa velit eveniet."
                  style={{ width: '600px', height: '270px', color:'#B14096'}}/>
                  </p>
                </div>
                 
                <div class="photo" onClick={handleImageClick}>
                {/* <img src="https://i.pinimg.com/236x/ea/13/7e/ea137e436e087c0bee9810dd8d0f4c94.jpg"/> */}
                <img src="https://i.pinimg.com/564x/e3/7f/99/e37f99d9889308e7e61c19694814b9d7.jpg"/>
                <input type="file" ref={inputRef} style={{display:'none'}}/>
                </div>
                </div>
                </div>

                <div class="Service2" id="Service2">
          <div>
          <h1 class="about-h2"><InputBox placeholder="Achievement" style={{color:'#F83292'}}/></h1>
            <hr style={{width:'300px',borderTop:'6px solid #FD7F20',marginLeft:'40%'}}/><br/>
            <p><teaxtarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet. Sit, eveniet adipisci." 
            style={{ width: '200px', height: '50px', color:'black'}}/></p>
          </div>
          <div>
            <Container>
              <Row>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Achievement1" style={{color:'#F83292'}}/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'#B14096'}}/></p>
              </div>
                </Col>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Achievement2"/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'#B14096'}}/></p>
              </div>
                </Col>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Achievement3"/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'#B14096'}}/></p>
              </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div class="Skills2" id="Skills2">
          <h1 class="about-h2"><InputBox placeholder="Skills"/></h1>
            <Container style={{marginLeft:'8%', padding:'5%'}}>
                <Row>
                <Col><InputBox  placeholder="Java" style={{color:'#B14096'}}/></Col>
                <Col><InputBox  placeholder="React"  style={{color:'#B14096'}}/></Col>
                <Col><InputBox  placeholder="SQL" style={{color:'#B14096'}}/></Col>
                <Col><InputBox  placeholder="PHP" style={{color:'#B14096'}}/></Col>
                </Row>
                <Row>
                <Col>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage(ev.target.value)}
                  
                  /></p> </Col>
                <Col>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage2(ev.target.value)}
                   /></p> </Col>
                <Col>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage3(ev.target.value)}
                    /></p> </Col>
                <Col>
                  <p><input type="range" min="1" max="100" step ="1" value={percentage} class="progressInput"onChange={(ev)=> setPercentage4(ev.target.value)}
                  /></p> </Col>
                </Row>
                </Container>
        </div>

        <div class="Education2" id="Education2">
          <h1 class="about-h2"><InputBox placeholder="Education"/></h1>
          <div class="educ2">
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

        <div class="Tempfoot2">
        <div class="footerStyle2">
        <div class="footer-content2">
        <h4><InputBox placeholder="Project Name" style={{background:'#B14096', border:'0px solid #FFC000',color:'white'}}/></h4>
        <p>
            <InputBox placeholder="I am a Full Stack Developer" style={{width:'300px',background:'#B14096', border:'0px solid #FFFFFF',color:'white'}}/></p>
        <p>    
        <InputBox placeholder="Desgination" style={{width:'300px',background:'#B14096', border:'0px solid #FFFFFF',color:'white'}}/>
        </p>
        <div class="footer-bottom2">
        <p><InputBox placeholder="copyright & copy;2023 project .designed by" style={{width:'300px',color:'white',background:'#F83292', border:'0px solid #3c4047'}}/>
        <span><InputBox placeholder="Name" style={{color:'white',background:'#F83292', border:'0px solid #3c4047'}}/></span></p>
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

export default Temp02