import React, {Component} from 'react';

import '../styles/PostPotraitCommentContainter.css';
import PostViewText from './PostViewText';
import {connect} from 'react-redux';
import {toggleLikeComment} from '../actions/commentActions';

class PostPotraitCommentContainter extends Component {
    render() {
        return (
            <section className="PostPotraitCommentContainter">
                {/* <div className="ViewAllCommentsButton Button">
                        View all 133 comments
                </div> */}
                <div className="PostPotraitCommentList">
                    {
                        Object.entries(this.props.comments)
                            .map(([key, val], idx) => {
                                return PostViewText(true, this.props.toggleLikeComment, key, val, idx);
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

export default connect(mapStateToProps, {toggleLikeComment})(PostPotraitCommentContainter);