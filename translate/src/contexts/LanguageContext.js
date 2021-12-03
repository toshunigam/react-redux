import React from "react";

// Passing react context english as a default language. For every context object you have to pass provider prop and also you have to pass components as child component 
const Context = React.createContext('english')

export class LanguageStore extends React.Component{
    state = {language:'english'}

    onLanguageChange = (language)=>{
        this.setState({
            language
        })
    }

    render(){
        return(
            <Context.Provider value={{ ...this.state, onLanguageChange:this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;