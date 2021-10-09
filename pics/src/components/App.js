import React from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import ImageCard from './ImageCard'

class App extends React.Component{
    state = {
        images:[]
    }

    onSearchSubmit = async (term)=>{
        // console.log(term)
        if(term){
            const res = await axios.get(`https://api.unsplash.com/search/photos`,{
                params:{query:term},
                headers:{
                    Authorization:'Client-ID DNO_jOFQDcj67wV_iXOV0nQp0dW8XYfrDrH3q8jIErk'
                }
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