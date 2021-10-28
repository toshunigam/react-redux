import { combineReducers } from 'redux'

const songsReducers = ()=>{
    return [
        {title:'Dua song',duration:'2.05'},
        {title:'Pyar hone laga hai',duration:'3.05'},
        {title:'ho jata hai pyar na jane koi',duration:'4.05'}
    ]
}

const selectedSongReducer = (selectedSong=null, action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs:songsReducers,
    selectedSong:selectedSongReducer
})