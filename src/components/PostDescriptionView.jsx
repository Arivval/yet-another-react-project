import React, {Component} from 'react';

import '../styles/PostDescriptionView.css';
import '../styles/PostViewText.css';

const POST_TEXT = "#HelloFrom the Atlantic Road in Norway. We are dreaming of a road trip along this coastal road that stretches across the ocean. The Atlantic Road is made up of a series of bridges and causeways built on several small islands and islets that connects the island of Averøy with the mainland.⁣";

class PostDescriptionView extends Component {

    render() {
        return (
            <section className="PostDescriptionViewContainer">
                <div className='PostViewTextContainer'>
                    <span className="PosterID UserID">
                        500px
                    </span>
                    <span className="PostViewText">
                        {POST_TEXT}
                    </span>
                </div>
            </section>
        );
    }

}

export default PostDescriptionView;