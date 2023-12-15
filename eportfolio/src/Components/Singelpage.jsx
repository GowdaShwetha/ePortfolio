import React, { useState } from 'react'
import { Input } from './Input';
// import android from '../image/android.png' 

function Singelpage() {
    let [text,setText]=useState('text')
    function inputHandler(e){
        console.log(e.target.value);
        // setText()
    }
  return (
    <>
    {/* <img src={android} alt="" />  */}
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis nesciunt culpa. Provident consequuntur voluptatem officia cum! Aliquid dolore accusamus, exercitationem eaque architecto, odit veniam sequi in voluptates excepturi doloremque.
    </p>
    <form onInput={inputHandler}>
        <input type="text" value ={text} name='name' 
        onChange={(e)=>setText(e.target.value)}
        />
        <button>submit</button>
    </form>
    <br/>
  
    {/* <Input/> */}
    </>


  )
}

export default Singelpage