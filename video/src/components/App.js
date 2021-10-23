import React, { useState } from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'


const App = ()=>{
    const [videos,setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const onSearchSubmit = async (term)=>{
        const lists = await youtube.get('/search',{params:{q:term}})
        setVideos(lists.data.items)
        console.log(term)
        console.log(lists)
    }

    const onVideoSelect = (video)=>{
        console.log('fromtheapp',video)
        setSelectedVideo(video)
    }

    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchSubmit} />
            <VideoDetail video={selectedVideo} />
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </div>
    )
}

export default App