const postReducer  = (state=[],action) =>{

    switch(action.type){
        case 'FETCH_POST':
            return action.payload;
        default:
            return state
    }
}

export default postReducer