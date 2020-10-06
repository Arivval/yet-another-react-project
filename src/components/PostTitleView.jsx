import React, {Component} from 'react';
import testProfileImage from '../mockdata/TestProfileImage.jpg';

import '../styles/PostTitleView.css';

class PostTitleView extends Component {

    render() {
        return (
            <header className="PostTitleViewContainer">
                <img className="PostTitleProfilePictureView Button" src={testProfileImage} alt=''/>
                <div className="PostTitleUserID UserID">
                    500px
                </div>
                <div className="PostTitleOptionButton Button">
                    <div className="PostTitleOptionButtonText">
                        ● ● ●
                    </div>
                </div>
            </header>
        );
    }

}

export default PostTitleView;