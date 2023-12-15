import {React, useState} from 'react'
import "./InputBox.css"


export const InputBox = ({inputBox, label, ...props}) => {

  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  const handleInputBlur = () => {
    setIsInputClicked(false);
  };
  

  return (
    <>
     <div className="inputContainer"> {label && <label>{label}</label>}
     <input type="text" {...props} 
     className={`inputBox ${isInputClicked ? 'clicked' : ''}`}
     onClick={handleInputClick}
     onBlur={handleInputBlur}
     />
     </div>
    </>
  )
}
