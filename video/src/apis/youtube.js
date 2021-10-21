import axios from 'axios'

const KEY = 'AIzaSyAgql9_uD7B8Jgc8hzJmJQomAoo8iOpmZc'
export default axios.create({
    //AIzaSyAgql9_uD7B8Jgc8hzJmJQomAoo8iOpmZc
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'
    }
})