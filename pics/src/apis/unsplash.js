import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID DNO_jOFQDcj67wV_iXOV0nQp0dW8XYfrDrH3q8jIErk'
    }
})