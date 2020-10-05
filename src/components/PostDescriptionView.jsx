import React, {Component} from 'react';

import '../styles/PostDescriptionView.css';
import '../styles/PostViewText.css';
import PostTextSpan from './PostTextSpan';

const POST_TEXT = "#HelloFrom the Atlantic Road in Norway. We are dreaming of a road trip along this coastal road that stretches across the ocean. The #Atlantic_Road is made up of a series of bridges and causeways built on several small islands and islets that connects the island of Averøy with the mainland. 🙌⁣";

class PostDescriptionView extends Component {
    render() {
        return (
            <section className="PostDescriptionViewContainer">
                <div className='PostViewTextContainer'>
                    <span className="PosterID UserID">
                        500px
                    </span>
                    <PostTextSpan text={POST_TEXT}/>
                </div>
            </section>
        );
    }

}

export default PostDescriptionView;