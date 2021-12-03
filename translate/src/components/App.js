import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

class App extends React.Component{
    state = {language:'english'}
    onLanguageChange = (language)=>{
        this.setState({
            language
        })
    }

    render(){
        return(
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App