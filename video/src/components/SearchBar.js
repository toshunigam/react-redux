import React, { useState } from 'react'

const SearchBar = ({onSubmit})=>{
    const [term, setTerm] = useState('building')

    const onFormSubmit = (e)=>{
        e.preventDefault()
        // console.log(this.state.term)
        
        // Calling parent function onSubmit to pass data from child to parent using this.props
        onSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
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