import React from 'react';

import '../styles/PostImageView.css';
import testImage from '../mockdata/TestImage.jpg';

export const PostImageViewPotrait = (className) => {
        return (
            <section className="PostImageViewContainer">
                <img className="PostImagePotrait" src={testImage} alt=''/>                    
            </section>
        );
}

export const PostImageViewLandscape = (className) => {
    return (
            <img className="PostImageLandscape" src={testImage} alt=''/>                    
    );
}