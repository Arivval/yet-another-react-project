import React, {Component} from 'react';

import '../styles/PostView.css';
import PostTitleView from './PostTitleView';
import {PostImageViewPotrait} from './PostImageView';
import PostActionView from './PostActionView'
import PostLikeCountView from './PostLikeCountView';
import PostDescriptionView from './PostDescriptionView';
import PostPotraitCommentContainter from './PostPotraitCommentContainter';
import PostTimeView from './PostTimeView';
import PostTextAreaView from './PostTextAreaView';

class PostView extends Component {

    render() {
        return (
            <article className="PostViewContainer">
                <PostTitleView/>
                <PostImageViewPotrait/>
                <PostActionView/>
                <PostLikeCountView/>
                <PostDescriptionView/>
                <PostPotraitCommentContainter/>
                <PostTimeView/>
                <PostTextAreaView/>
            </article>
        );
    }

}

export default PostView;