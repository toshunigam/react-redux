import React from "react";

const Dropdown = (props)=>{
    return(
        <label>{props.label}</label>
        
    )
}

Dropdown.defaultProps = {
    options:[],
    label:'',
    defaultValue:'select one'
}
export default Dropdown