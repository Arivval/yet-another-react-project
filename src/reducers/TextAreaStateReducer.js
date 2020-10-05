import { SET_TEXT_AREA_STATE } from '../actions/textAreaStateAction';

const initState = {commentID: null, atString: null};

function textAreaStateReducer(state=initState, action) {
    switch(action.type) {
        case SET_TEXT_AREA_STATE:
            const newState = {
                commentID: action.commentID,
                atString: action.atString,
            }
            return newState;
        default:
            return state
    }
}

export default textAreaStateReducer;