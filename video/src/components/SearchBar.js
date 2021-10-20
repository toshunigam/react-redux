import React, { useState } from 'react'

const SearchBar = ()=>{
    const [term, setTerm] = useState('building')

    const onFormSubmit = (e)=>{
        e.preventDefault()
        // console.log(this.state.term)
        
        // Calling parent function onSubmit to pass data from child to parent using this.props
        this.props.onSubmit(term)
    }

    return (
        <div className="ui segment">
            <form onSubmit={(e)=>onFormSubmit(e)} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={term} onChange={(event)=>setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar