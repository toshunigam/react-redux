import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'


const App = ()=>{
    const onSearchSubmit = ()=>{
        youtube.get('')
        
    }
    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchSubmit} />
        </div>
    )
}

export default App