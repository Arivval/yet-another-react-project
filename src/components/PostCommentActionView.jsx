import React from 'react';
import '../styles/PostCommentActionView.css';

const PostCommentActionView = (key, val, setTextAreaState, idx, replyAtString=null) => {
    return(<div className="CommentActionView" key={idx}> 
        { val.likeCount === 0 ? null :
        <div className="CommentActionButton Button">
            {val.likeCount.toString() + (val.likeCount === 1 ? ' like' : ' likes')}
        </div>
        }
        {
            replyAtString ? 
            <div className="CommentActionButton Button" onClick={()=>{setTextAreaState(key, replyAtString)}}>
            Reply
            </div> :
            <div className="CommentActionButton Button" onClick={()=>{setTextAreaState(key, val.userID)}}>
            Reply
            </div> 
        }
    </div>);
}

export default PostCommentActionView;