import React from 'react'
import "../css/InputControl.css"

export const InputControl = ({label, ...props}) => {
  return (
    <>
     <div class="input-container"> {label && <label>{label}</label>}
     <input type="text" {...props}/>
     </div>
    </>
  )
}
