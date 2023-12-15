import React from 'react'
import  {Link, useNavigate } from 'react-router-dom'
import "../css/template.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import * as Icon from "react-bootstrap-icons"
import Temp1 from '../image/temp1.png'
import Temp2 from '../image/temp2.png'
import Temp3 from "../image/temp3.png"




const Template = () => {
  const homeNavi=useNavigate()

  const arrow={
    fontSize:"2rem",
    color:"#235784",
    marginLeft:"90%",
    marginTop:"2%",
  }
  return (
    <>

    {/* <Link to='/'> */}
    {/* <button>Home</button> */}
    {/* </Link> */}

    <Icon.ArrowLeftCircleFill onClick={()=>homeNavi("/")} style={arrow}></Icon.ArrowLeftCircleFill>
    <section id="temp">
      <h1>Templates</h1>
      <Link to='/single'>
        <Container>
        <Row id="temps">
        <Col><Link to="/temp01"><img src={Temp1}/></Link></Col>
        <Col><Link to="/temp02"><img src={Temp2}/></Link></Col>
        <Col><Link to="/temp03"><img src={Temp3}/></Link></Col><br/>
      </Row><br/>
        </Container>
     
      
  
      </Link>
    </section>
    </>

  )
}

export default Template