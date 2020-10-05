import React, {Component} from 'react';

import '../styles/PostLikeCountView.css';

class PostLikeCountView extends Component {

    render() {
        return (
            <section className="PostLikeCountViewContainer">
                <div className="PostLikeCountButton Button">
                    15,067 likes
                </div>
            </section>
        );
    }

}

export default PostLikeCountView;