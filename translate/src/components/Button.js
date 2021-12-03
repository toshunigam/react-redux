import React from "react";

import Context from "../contexts/LanguageContext";

class Button extends React.Component{
    render(){
        return(
            <button className="ui button primary">
                <Context.Consumer>
                    {({ language })=> language==='english' ? 'submit':'Jamaa karein'}
                </Context.Consumer>
            </button>
        )
    }
}

export default Button;