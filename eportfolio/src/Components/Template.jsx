import React from 'react'
import  {Link, useNavigate } from 'react-router-dom'
import "../css/template.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
      {/* <Row>
        <Col><img src="https://i.pinimg.com/564x/90/fe/7c/90fe7c7014869976da794c945372534c.jpg"/></Col>
        <Col><img src="https://i.pinimg.com/564x/36/49/1b/36491b7667af393c01939fa0e6acc739.jpg"/></Col>
        <Col><img src="https://i.pinimg.com/564x/a4/ed/5f/a4ed5f04df41b6a82262bd39990fe49b.jpg"/></Col>
      </Row> */}
    </Container>
      </Link>
    </section>
    </>

  )
}

export default Template