import React from "react";

class SearchBar extends React.Component{
    state={term:''}

    onFormSubmit(e){
        e.preventDefault()
        // console.log(this.state.term)
        
        // Calling parent function onSubmit to pass data from child to parent using this.props
        this.props.onSubmit(this.state.term)
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