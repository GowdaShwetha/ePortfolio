import React from 'react'
import "../Temps/Temp03.css"
import { useRef , useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import html2pdf from 'html2pdf.js';

import { InputBox } from './InputBox';
import CircleProgressBar from './CircleProgressBar';
import Container from 'react-bootstrap/esm/Container';
import { Input } from '../Input';

export const Temp03 = () => {

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
      const element = document.getElementById('TempDesgin3'); // replace 'single-page-content' with the ID of your root element
      
      html2pdf(element);
    };   

  return (
    <>
    
    <div id="TempDesgin3">
        <div class="temp3_edit">
        <div class="tempBody">
        <div class="temp3_header">
       <div class="nav_bar3"> 
            <p class="logo3"><Input text="Name"  placeholder="Name" className="logo2" style={{color:'#F83292',size:'10px',backgroundColor:'transparent',border:'1px solid black'}}/></p>
                <ul>
                    <a href="#Home3">Home</a>
                    <a href="#About3">About</a>
                    <a href="#Service3">Acheivement</a>
                    <a href="#Skills3">Photography</a>
                    <a href="#Education3">Education</a>
                   
                </ul>
            </div>
        </div>

        <div class="Home-body">
        <div id="Home3" class="Home3">
        <div class="info">
          <div class="align">
          <h6 class="h6"><InputBox  placeholder="Hey  My name is"  
               style={{color:"#B14096",fontWeight: 'bold',fontSize: '1.5rem',backgroundColor:'transparent',border:'1px solid black'}}/></h6>
               <h1 class="h11"><InputBox  placeholder="Shwetha Gowda"  
               style={{width:'600px',color:"",fontWeight: 'bold',fontSize: '3rem',backgroundColor:'transparent',border:'1px solid black'}}/></h1>
                {/* <h1 class="h11"><span class="span"><InputBox  placeholder="JAVA"/></span></h1> */}
                <p class="h1"><InputBox  placeholder="I am a UI/UX Desginer." 
                style={{width:'800px',color:"#B14096",fontWeight: 'bold',fontSize: '3rem',backgroundColor:'transparent',border:'1px solid black'}}></InputBox></p>

          </div>
               
          </div>
          </div>
          </div>
          
          </div>

        <div class="About3" id="About3">
        
                <h1 class="about-h3"><InputBox placeholder="About me"
                style={{color:'black'}}/></h1>
                <div class="about-me3"> 
                <div class="me3">
                  <p class="text3">
                  <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem doloribus voluptate animi odit culpa velit eveniet. Sit, eveniet adipisci. 
                  Facere ducimus sint quam quisquam laborum neque incidunt, perspiciatis soluta delectus.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem doloribus voluptate animi odit culpa velit eveniet."
                  style={{ width: '600px', height: '270px', color:'black'}}/>
                  </p>
                </div>
                 
                <div class="photo" onClick={handleImageClick}>
                {/* <img src="https://i.pinimg.com/236x/ea/13/7e/ea137e436e087c0bee9810dd8d0f4c94.jpg"/> */}
                <img src="https://i.pinimg.com/236x/56/0f/ee/560fee0f43cb370b57a2c8560306a76d.jpg"/>
                <input type="file" ref={inputRef} style={{display:'none'}}/>
                </div>
                </div>
                </div>

                <div class="Service3" id="Service3">
          <div>
          <h1 class="about-h3"><InputBox placeholder="Achievement" style={{color:'#F83292'}}/></h1>
            <hr style={{width:'300px',borderTop:'6px solid #000000',marginLeft:'40%'}}/><br/>
            <p><teaxtarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet. Sit, eveniet adipisci." 
            style={{ width: '200px', height: '50px', color:'black'}}/></p>
          </div>
          <div>
            <Container>
              <Row>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Achievement1" style={{color:'black'}}/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'black'}}/></p>
              </div>
                </Col>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Achievement2"/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'black'}}/></p>
              </div>
                </Col>
                <Col>
                <div  class='con'>
              <p class="h2"><InputBox placeholder="Achievement3"/></p>
              <p class="p"><textarea placeholder="Exercitationem doloribus voluptate animi odit culpa velit eveniet."
              style={{ width: '300px', height: '100px', color:'black'}}/></p>
              </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div class="Skills3" id="Skills3">
          <h1 class="about-h3"><InputBox placeholder="Photography"/></h1>
            <Container style={{marginLeft:'3%'}}>
                
                <Row>
                <Col>
                <div class="photo" onClick={handleImageClick}>
                <img src="https://i.pinimg.com/564x/d5/a8/05/d5a805871f757157192ab1020081fd05.jpg"/>
                <input type="file" ref={inputRef} style={{display:'none', width:'60%'}}/>
                </div>
                </Col>
                <Col>
                <div class="photo" onClick={handleImageClick}>
                <img src="https://i.pinimg.com/564x/df/f9/ea/dff9ea6629f316065900e2a3c5055a6c.jpg"/>
                <input type="file" ref={inputRef} style={{display:'none', width:'60%'}}/>
                </div>
                </Col>

                <Col>
                <div class="photo" onClick={handleImageClick}>
                <img src="https://i.pinimg.com/474x/31/61/b7/3161b7b57d0b15c9d74280fe1c99693a.jpg"/>
                <input type="file" ref={inputRef} style={{display:'none', width:'60%'}}/>
                </div>
                </Col>
                {/* <Col>
                <div class="photo" onClick={handleImageClick}>
                <img src="https://i.pinimg.com/564x/95/06/dd/9506ddd052a4ab470ad4c099500b8bc8.jpg"/>
                <input type="file" ref={inputRef} style={{display:'none', width:'40%'}}/>
                </div>
                </Col> */}
                </Row>
                <Row>
                <Col><InputBox  placeholder="Descrption" style={{color:'#B14096'}}/></Col>
                <Col><InputBox  placeholder="Descrption"  style={{color:'#B14096'}}/></Col>
                <Col><InputBox  placeholder="Descrption" style={{color:'#B14096'}}/></Col>
                </Row>
                </Container>
        </div>

        <div class="Education3" id="Education3">
          <h1 class="about-h3"><InputBox placeholder="Education"/></h1>
          <div class="educ3">
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

        <div class="Tempfoot3">
        <div class="footerStyle3">
        <div class="footer-content3">
        <h4><InputBox placeholder="Project Name" style={{background:'black', border:'0px solid #000000',color:'#B14096'}}/></h4>
        <p>
            <InputBox placeholder="I am a Full Stack Developer" style={{width:'300px',background:'black', border:'0px solid #000000',color:'white'}}/></p>
        <p>    
        <InputBox placeholder="Desgination" style={{width:'300px',background:'black', border:'0px solid #000000',color:'white'}}/>
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
