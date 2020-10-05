export const SET_TEXT_AREA_STATE = 'SET_TEXT_AREA_STATE';

export function setTextAreaState(commentID, atString) {
    return ({
        type: SET_TEXT_AREA_STATE,
        commentID,
        atString
    });
}