import React from 'react'

import SearchBar from './SearchBar'
import ImageCard from './ImageCard'
import unsplash from '../apis/unsplash'

class App extends React.Component{
    state = {
        images:[]
    }

    onSearchSubmit = async (term)=>{
        // console.log(term)
        if(term){
            // call unsplash custom client 
            const res = await unsplash.get(`/search/photos`,{
                params:{query:term},
            })

            console.log(res.data.results)
            
            this.setState({
                images:res.data.results
            })
        }
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                
                {this.state.images?this.state.images.map((item,i)=><ImageCard data={item} key={i} />):""}
            </div>
        )
    }
};

export default App