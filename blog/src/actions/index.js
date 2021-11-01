import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPosts = async ()=>{
    const response = await jsonPlaceholder.get('/posts')
    return{
        type:'FETCH_POST',
        payload:response
    }
}