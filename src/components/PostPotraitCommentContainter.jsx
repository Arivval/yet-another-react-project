import React, {Component} from 'react';

import '../styles/PostPotraitCommentContainter.css';
import PostViewText from './PostViewText';
import {connect} from 'react-redux';
import {toggleLikeComment} from '../actions/commentActions';
import {Link} from 'react-router-dom';
class PostPotraitCommentContainter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentDisplayOffset: 0,
        }
    }

    componentDidMount() {
        // determine where in comment object to start render
        const initalCommentCount = Object.keys(this.props.comments).length;
        const commentDisplayOffset = Math.max(0,initalCommentCount - 2);
        this.setState({commentDisplayOffset: commentDisplayOffset});
    }

    render() {
        const commentCount = Object.keys(this.props.comments).length;
        return (
            <section className="PostPotraitCommentContainter">
                { commentCount > 2 ? 
                    <Link to="/landscape" style={{ textDecoration: 'none' }}>
                        <div className="ViewAllCommentsButton Button">
                        View all {commentCount} comments
                        </div> 
                    </Link> : null
                }
                <div className="PostPotraitCommentList">
                    {
                        Object.entries(this.props.comments)
                            .map(([key, val], idx) => {
                                if (idx < this.state.commentDisplayOffset) {
                                    return null;
                                }
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