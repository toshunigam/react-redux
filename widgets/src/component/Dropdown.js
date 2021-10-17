import React, { useEffect, useRef, useState } from "react";

const Dropdown = (props)=>{
    const [open,setOpen]=useState(false)
    const ref = useRef();

    useEffect(()=>{
        const onBodyClick = (e) => {
            if(ref.current!==null && ref.current.contains(e.target)){
                return;
            }

            setOpen(false)
        }

        document.body.addEventListener('click',onBodyClick)

        return ()=>{
            document.body.removeEventListener('click',onBodyClick)
        }
    },[])

    const renderOptions = props.options.map((option)=>{
        if(option.value===props.selected.value){
            return null;
        }
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
        <div ref={ref} className="ui form">
            <div className="field">
                <label>{props.title}</label>
                <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open ? 'visible transition':''}`}>
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