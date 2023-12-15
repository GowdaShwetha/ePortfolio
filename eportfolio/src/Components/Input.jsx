import React from 'react'
import { useState } from 'react'


export const Input = (props) => {
    let defaultText=props.text
    let [text,setText]=useState(defaultText)


  return ( 
    // <input type="text" value ={text} name='name' 
    //     onChange={(e)=>setText(e.target.value)}/>
    <input type="text" value={text} name='name' onChange={(e)=>setText(e.target.value)} 
    style={{backgroundColor: '#ffffff', 
    border: '1px solid #ffffff'}}/>
  )
}
 