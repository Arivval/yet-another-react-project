import React, {Component} from 'react';

import '../styles/PostLandscapeCommentContainer.css';
import PostViewText from './PostViewText';
import {connect} from 'react-redux';
import {toggleLikeComment} from '../actions/commentActions';
import {setTextAreaState} from '../actions/textAreaStateAction';
import PostCommentActionView from './PostCommentActionView';
import PostLandscapeReplyContainer from './PostLandscapeReplyContainer';

class PostLandscapeCommentContainer extends Component {

    render() {
        return (
            <section className="PostLandscapeCommentContainer">
                <div className="PostLandscapeCommentList">
                    {
                        Object.entries(this.props.comments)
                            .map(([key, val], idx) => {
                                const firstIdx = idx * 3;
                                const secondIdx = idx * 3 + 1;
                                const thirdIdx = idx * 3 + 2;
                                return [
                                    PostViewText(true, this.props.toggleLikeComment, key, val, firstIdx),
                                    PostCommentActionView(key, val, this.props.setTextAreaState, secondIdx),
                                    <PostLandscapeReplyContainer 
                                        key={thirdIdx}
                                        replies={val.replies}
                                        replyAtID={val.userID}/>
                                ];
                            })
                    }
                </div>
            </section>
        );
    }

}

const mapStateToProps = state => {
    return {comments: state.comments};
}

export default connect(mapStateToProps, {toggleLikeComment, setTextAreaState})(PostLandscapeCommentContainer);