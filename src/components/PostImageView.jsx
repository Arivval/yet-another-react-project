import React from 'react';

import '../styles/PostImageView.css';
import testImage from '../TestImage2.jpg';

export const PostImageViewPotrait = (className) => {
        return (
            <section className="PostImageViewContainer">
                <img className="PostImagePotrait" src={testImage} alt=''/>                    
            </section>
        );
}

export const PostImageViewLandscape = (className) => {
    return (
        <div className="PostImageViewContainerLandscape">
            <img className="PostImageLandscape" src={testImage} alt=''/>                    
        </div>
    );
}