import {ADD_COMMENT, DEL_COMMENT, TOGGLE_LIKE_COMMENT} from '../actions/commentActions';
import {ADD_REPLY, DEL_REPLY, TOGGLE_LIKE_REPLY} from '../actions/replyActions';
import { nanoid } from 'nanoid';

const initState = {};

function commentReducer(state=initState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            const newComment = {
                userID: action.userID,
                comment: action.comment,
                postTime: action.postTime,
                liked: false,
                likeCount: 0,
                replies: {}
            }
            const addCommentState = {...state};
            const commentID = nanoid();
            addCommentState[commentID] = newComment;
            return addCommentState
        case DEL_COMMENT:
            if (action.commentID in action) {
                const newState = {...state};
                delete newState[action.commentID];
                return newState;
            }
            return state;
        case TOGGLE_LIKE_COMMENT:
            if (action.commentID in state) {
                const newState = {...state};
                const commentObj = newState[action.commentID]
                commentObj.liked = !commentObj.liked;
                commentObj.liked ? commentObj.likeCount += 1 : commentObj.likeCount -= 1;
                return newState;
            }
            return state;
        case ADD_REPLY:
            const newReply = {
                userID: action.userID,
                commentID: action.commentID,
                comment: action.comment,
                postTime: action.postTime,
                liked: false,
                likeCount: 0,
            }
            const addReplyState = JSON.parse(JSON.stringify(state));
            const replyID = nanoid();
            addReplyState[action.commentID].replies[replyID] = newReply;
            return addReplyState
        case DEL_REPLY:
            if (action.commentID in state && action.replyID in state[action.commentID].replies) {
                const newState = JSON.parse(JSON.stringify(state));
                delete newState[action.commentID].replies[action.replyID];
                return newState;
            }
            return state;        
        case TOGGLE_LIKE_REPLY:
            if (action.commentID in state && action.replyID in state[action.commentID].replies) {
                const newState = JSON.parse(JSON.stringify(state));
                const commentObj = newState[action.commentID];
                const replyObj = commentObj.replies[action.replyID];
                replyObj.liked = !replyObj.liked;
                replyObj.liked ? replyObj.likeCount += 1 : replyObj.likeCount -= 1;
                return newState;
            }
            return state;
        default:
            return state
    }
}

export default commentReducer;