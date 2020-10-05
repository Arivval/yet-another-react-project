export const ADD_COMMENT = 'ADD_COMMENT';
export const DEL_COMMENT = 'DEL_COMMENT';
export const TOGGLE_LIKE_COMMENT = 'TOGGLE_LIKE_COMMENT';

export function addComment(userID, comment, postTime) {
    return ({
        type: ADD_COMMENT,
        userID,
        comment,
        postTime
    });
}

export function delComment(commentID) {
    return ({
        type: DEL_COMMENT,
        commentID
    });
}

export function toggleLikeComment(userID, commentID) {
    return ({
        type: TOGGLE_LIKE_COMMENT,
        commentID
    });
}