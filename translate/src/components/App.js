import React from "react";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

class App extends React.Component{
  
    render(){
        return(
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    
                    <UserCreate />
                
                </LanguageStore>
                
            </div>
        )
    }
}

export default App