import React, { useState } from 'react'
// import Accordion from './component/Accordion'
import Dropdown from './component/Dropdown'
// import Search from './component/Search'

const items = [
    {
        title:"what is react?",
        content:"React is javascript framework introduced by Facebook."
    },
    {
        title:"what is javascript?",
        content:"Javascript is a language which runs on client side browser without using any dependancy."
    },
    {
        title:"What is nodejs?",
        content:"Nodejs is a server side language which is javascript library run and execute javascript code on server."
    },
    {
        title:"what is java",
        content:"Java is object oriented programming language."
    }
]
const options = [
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
    },
    {
        label:'A shade of orange',
        value:'orange'
    }
]
const App = ()=>{
    const [selected, setSelected] = useState(options[0])
    return (
        <div>

            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown options={options} selected={selected} onSelectionChange={setSelected} />
        </div>
    )
    
}

export default App