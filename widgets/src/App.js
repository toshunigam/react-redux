import React from 'react'
import Accordion from './component/Accordion'

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
const App = ()=>{
    return (
        <div>

            <Accordion items={items} />
        </div>
    )
    
}

export default App