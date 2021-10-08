import React from "react";

class SearchBar extends React.Component{
    state={term:''}

    onFormSubmit(e){
        e.preventDefault()
        console.log(this.state.term)
    }
    
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={(e)=>this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={event=>this.setState({term:event.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar