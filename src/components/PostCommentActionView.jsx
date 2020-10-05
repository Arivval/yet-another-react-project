import React from 'react';
import '../styles/PostCommentActionView.css';

const PostCommentActionView = (key, val, replyAction, idx, replyAtID=null) => {
    return(<div className="CommentActionView" key={idx}> 
        { val.likeCount === 0 ? null :
        <div className="CommentActionButton Button">
            {val.likeCount.toString() + (val.likeCount === 1 ? ' like' : 'likes')}
        </div>
        }
        {
            replyAtID ? 
            <div className="CommentActionButton Button" onClick={()=>{replyAction(key, replyAtID)}}>
            Reply
            </div> :
            <div className="CommentActionButton Button" onClick={()=>{replyAction(key, val.userID)}}>
            Reply
            </div> 
        }
    </div>);
}

export default PostCommentActionView;