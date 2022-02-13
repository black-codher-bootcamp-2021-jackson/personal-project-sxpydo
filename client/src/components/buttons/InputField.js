import React from "react";

const InputField = (props) => {
    return (
      <>
      <input className="form" type ={props.type?props.type:null} placeholder={props.placeholder} required={props.required?props.required:null}></input>
      </>  
    )
}

export default InputField;