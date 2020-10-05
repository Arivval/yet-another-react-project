import React, {Component} from 'react';
import isAlphanumeric from 'is-alphanumeric';

/**
 * Separate string into a list of hashtag + mentions + other strings
 */
const splitStringToSpanList = (str) => {
    const spanList = [];
    let charStartIdx = 0;
    let isLink = false;
    [...str].forEach((char, idx) => {
        if (char === '#' || char === '@') {
            // start of new hashtag or mention, push previous char chunk
            if (idx !== 0) {
                const prevStringChunk = str.slice(charStartIdx, idx);
                spanList.push(prevStringChunk);
            }
            isLink = true;
            charStartIdx = idx;
        } else if (isLink && !isAlphanumeric(char) && char !== '_' && char !== ',') {
            // links can only contain {alphanumeric, '_', ','}
            // if we are currently traversing a link, that link will terminate here
            const prevStringChunk = str.slice(charStartIdx, idx);
            spanList.push(prevStringChunk);
            charStartIdx = idx;
            isLink = false;
        }
    });
    // push the last string chunk
    if (str.length !== 0) {
        spanList.push(str.slice(charStartIdx));
    }
    return spanList;
}

/**
 * Renders the given string with hash tag and mentions highlighted
 */
class PostTextSpan extends Component {    
    render() {
        const spanList = splitStringToSpanList(this.props.text);
        return(                  
            spanList.map((string, idx) => {
                if (string !== '') {
                    if (string[0] === '#' || string[0] === '@') {
                        return (
                            <span className="PostViewText PostViewTextHighlighted" key={idx}>
                                {string}
                            </span>
                        );
                    } else {
                        return (
                            <span className="PostViewText" key={idx}>
                                {string}
                            </span>
                        );
                    }
                } else {
                    return null;
                }
            })
        );
    }

}

export default PostTextSpan;