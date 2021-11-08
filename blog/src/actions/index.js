import _ from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder"

// get posts and users into signle redux thunk by calling two other redux thunk 
export const fetchPostsAndUsers = ()=> async (dispatch, getState)=>{
    // calling fetchPosts function for posts
    await dispatch(fetchPosts())

    // now call fetchUser funtion to get user detail 
    // const userIds = _.uniq(_.map(getState().posts,'userId'))
    // console.log(userIds)
    // userIds.forEach(id=> dispatch(fetchUser(id)))

    // refactor above 2 line of fetchUser function using lodash 
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id=>{dispatch(fetchUser(id))})
        .value() //this function is mendatory into last to execute above chaing function

}


/* export const fetchPosts1 = ()=>{
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({
            type:'FETCH_POST',
            payload:response
        })
    
    }
} */

// same as above
export const fetchPosts = ()=> async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({
        type:'FETCH_POST',
        payload:response.data
    })
    
}

export const fetchUser = (ID)=> async dispatch =>{
    const response = await jsonPlaceholder.get(`/users/${ID}`)
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    })
}

export const fetchUser1 = (ID) => (dispatch)=>{
    _fetchUser(ID,dispatch)
}
const _fetchUser = _.memoize(async (ID,dispatch)=>{
    const response = await jsonPlaceholder.get(`/users/${ID}`)
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    })
})
