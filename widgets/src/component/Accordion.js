import React, { useState } from 'react'

const Accordion = ({ items })=>{
    const [activeIndex, setActiveIndex] = useState(null)
    const onTitleClick = (index)=>{
        console.log('title was cliked',index)
        setActiveIndex(index)
    }
    const accordionItems = items.map((item,i)=>{
        const active = i === activeIndex ? 'active':''
        
        return (
            <React.Fragment key={i}>
                <div className={`title ${active}`} onClick={()=>onTitleClick(i)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">
            {accordionItems}
            
        </div>
    )

}

export default Accordion