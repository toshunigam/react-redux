import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPosts1 = ()=>{
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({
            type:'FETCH_POST',
            payload:response
        })
    
    }
}

// same as above
export const fetchPosts = ()=> async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({
        type:'FETCH_POST',
        payload:response
    })
    
}

export const fetchUser = (ID)=> async dispatch =>{
    const response = await jsonPlaceholder.get(`user/${ID}`)
    dispatch({
        type:'FETCH_USER',
        payload:response
    })
}