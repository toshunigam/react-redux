import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'


const App = ()=>{
    const onSearchSubmit = async (term)=>{
        const lists = await youtube.get('/search',{params:{q:term}})

        console.log(term)
        console.log(lists)
    }
    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchSubmit} />
        </div>
    )
}

export default App