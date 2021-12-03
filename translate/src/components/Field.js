import React from "react";
import Context from "../contexts/LanguageContext";

class Field extends React.Component{
    static contextType = Context;
    render(){
        const text = this.context.language === 'english' ? 'Name':'Naam'
        return(
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field;