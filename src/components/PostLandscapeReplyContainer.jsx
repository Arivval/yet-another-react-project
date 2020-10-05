import React, {Component} from 'react';

import '../styles/PostLandscapeReplyContainer.css';
import PostViewText from './PostViewText';
import {connect} from 'react-redux';
import {toggleLikeReply} from '../actions/replyActions';
import {setTextAreaState} from '../actions/textAreaStateAction';
import PostCommentActionView from './PostCommentActionView';

class PostLandscapeReplyContainer extends Component {

    render() {
        return (
            <section className="PostLandscapeReplyContainer">
                <div className="PostLandscapeReplyList">
                    {
                        Object.entries(this.props.replies)
                            .map(([key, val], idx) => {
                                const firstIdx = idx * 2;
                                const secondIdx = idx * 2 + 1;
                                return [
                                    PostViewText(true, this.props.toggleLikeReply, val.commentID, val, firstIdx, key),
                                    PostCommentActionView(val.commentID, val, this.props.setTextAreaState, secondIdx)
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

export default connect(mapStateToProps, {toggleLikeReply, setTextAreaState})(PostLandscapeReplyContainer);