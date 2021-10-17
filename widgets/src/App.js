import React, { useState } from 'react'
import Accordion from './component/Accordion'
import Dropdown from './component/Dropdown'
import Translate from './component/Translate'
import Search from './component/Search'
import Route from './component/Route'
import Header from './component/Header'

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
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options} selected={selected} onSelectionChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
    
}

export default App