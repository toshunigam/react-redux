import React from "react";

const Dropdown = (props)=>{
    const renderOptions = props.options.map((option)=>{
        return(
            <div 
                className="item" 
                key={option.value}
                onClick={()=>props.onSelectionChange(option)}
            >
                {option.label}
            </div>
        )
    })
    return(
        <div className="ui form">
            <div className="field">
                <label>{props.title}</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className="menu visible transition">
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

Dropdown.defaultProps = {
    title:'Select a color',
    selected:{
        value:'',
        label:'Select One'
    },
    options:[
        {
            label:'The color of red',
            value:'red'
        },
        {
            label:'The color of green',
            value:'green'
        },
        {
            label:'A shade of blue',
            value:'blue'
        }
    ],
    
}
export default Dropdown