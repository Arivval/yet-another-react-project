export const ADD_REPLY = 'ADD_REPLY';
export const DEL_REPLY = 'DEL_REPLY';
export const TOGGLE_LIKE_REPLY = 'TOGGLE_LIKE_REPLY';

export function addReply(userID, commentID, comment, postTime) {
    return ({
        type: ADD_REPLY,
        userID,
        commentID,
        comment,
        postTime
    });
}

export function delReply(commentID, replyID) {
    return ({
        type: DEL_REPLY,
        commentID,
        replyID
    });
}

export function toggleLikeReply(userID, commentID, replyID) {
    return ({
        type: TOGGLE_LIKE_REPLY,
        userID,
        commentID,
        replyID
    });
}
