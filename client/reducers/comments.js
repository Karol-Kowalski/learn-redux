// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

import produce from 'immer'

function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            //return the new state with new comment
            return produce(state, draftState => {
                draftState.push({
                    user: action.author, 
                    text: action.comment
                })
            })
            
            // [...state, {
            //     user: action.author,
            //     text: action.comment
            // }];
        case 'REMOVE_COMMENT':
            //we need to return the new state without the deleted comment
            return produce(state, draftState => {
                draftState.splice(action.i, 1)
            })
            
            // [
            //     ...state.slice(0, action.i),
            //     ...state.slice(action.i + 1)
            // ]
        default: 
            return state
    }
        
}

function comments(state = [], action) {
    console.log(action.postId)
    if(typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            //overwrite thispost with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments