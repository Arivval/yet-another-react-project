import React, {Component} from 'react';

import '../styles/PostViewLandscape.css';
import PostTitleView from './PostTitleView';
import {PostImageViewLandscape} from './PostImageView';
import PostActionView from './PostActionView'
import PostLikeCountView from './PostLikeCountView';
import PostDescriptionView from './PostDescriptionView';
import PostLandscapeCommentContainer from './PostLandscapeCommentContainer';
import PostTimeView from './PostTimeView';
import PostTextAreaView from './PostTextAreaView';

class PostViewLandscape extends Component {

    render() {
        return (
            <article className="PostViewLandscapeContainer">
                <div className="PostViewLandscapeRightSideView">
                    <div className="PostTitleViewLandscape">
                        <PostTitleView/>                        
                    </div>
                    <div className="PostViewRightSideOverflow">
                        <PostDescriptionView/>
                        <PostLandscapeCommentContainer/>
                    </div>
                    <div className="PostViewLandscapeRightBottomView">
                        <PostActionView/>
                        <PostLikeCountView/>
                        <PostTimeView/>
                        <PostTextAreaView/>
                    </div>
                </div>
                <PostImageViewLandscape/>
            </article>
        );
    }

}

export default PostViewLandscape;