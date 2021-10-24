import React, { useEffect, useState } from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'


const App = ()=>{
    const [videos,setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    const onSearchSubmit = async (term='building')=>{
        const lists = await youtube.get('/search',{params:{q:term}})
        setVideos(lists.data.items)
        setSelectedVideo(lists.data.items[0])
        console.log(term)
        console.log(lists)
    }

    useEffect(()=>{
        onSearchSubmit('buildings')
    },[])

    

    const onVideoSelect = (video)=>{
        // console.log('fromtheapp',video)
        setSelectedVideo(video)
    }

    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App