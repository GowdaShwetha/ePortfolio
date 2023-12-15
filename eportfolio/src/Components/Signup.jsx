import React from 'react'
// import ListPortfolio from './ListPortfolio'
// import LinearGradient from "react-native-linear-gradient"
import signimg from "../image/signimg.jpg"
// import { Fonts,Georgia} from 'react-bootstrap-icons'

export const Signup = () => {
  const sign={
    // boxShadow: '0 .3rem .5rem rgba(0, 0, 0, 0.3)',
    border: '1px solid rgb(2, 0, 0)',
    height: '400px',
    width: '25%',
    marginLeft:'14%',
    borderRadius: '5%',
    // background:linearGradient('#235784','#40ABC4'),
    display:'flex',   
  }
 

  const formInput={
    marginTop: '5%',
    display:'block',
    width:'200px',
    padding:'15px 5px',
    border:'0',
    borderBottom:'1px solid#999999',
    outline:'none',
    background:'transparent',
    color:'goldenrod',
    fontSize:'1.5rene',
    marginLeft:' 25%',
  }
  const button={
      width:'110px',
        height:'35px',
        margin:'0 10px',
        borderRadius: '30px',
        border:'0',
        outline :'none',
        color:'#000000',
        cursor:'pointer',
        fontSize:'1rem',
        marginTop: '10px',
        backgroundColor:'#ddac17',
        marginLeft: '35%',
        marginTop: '10%',
  }
  const heading ={
    marginTop:'4%',
    color: 'black',
    fontFamily:'Georgia', 
    width: '50%',
    marginLeft: '27%',
    bordeRadius:' 30px',
    textAlign:'center',
  }
  const imageStyle={
      height:'700px',
      width:'500px',
      marginLeft:'80%',
      Top:'-10%',
  }

  return (
    <div>
      {/* <ListPortfolio/> */}
     {/* <LinearGradient colors={['#235784','#40ABC4']} style="style.linearGradient"> 
     <h1 style={heading}>Sign up</h1>
  </LinearGradient> */}
      <div style={sign}>
    <form action="">
     <h1 style={heading}>Sign Up</h1>
    <input type="text" placeholder='UserName' required style={formInput}/>
    <input type="email" placeholder="User Email" required style={formInput}/>
    <input type="password" placeholder=" Enter password" required style={formInput}/>
    <button type="submit" id="submit" style={button}>Sign Up</button>
    </form>
    <div>
      <img src={signimg} alt="" style={imageStyle}/>
    </div>
    </div>
    </div>
  )
}
export default Signup