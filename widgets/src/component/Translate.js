import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";


const options = [
    {
        label:'Afrikan',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
]
const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text,setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input className="" value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
            </div>
            <Dropdown selected={language} onSelectionChange={setLanguage} options={options} title="Translate Language" />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate