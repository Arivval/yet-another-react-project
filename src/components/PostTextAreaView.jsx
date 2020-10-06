import React, {Component} from 'react';
import '../styles/PostTextAreaView.css';
import {connect} from 'react-redux';
import {addComment} from '../actions/commentActions';
import {addReply} from '../actions/replyActions'
import {setTextAreaState} from '../actions/textAreaStateAction';
import TextareaAutosize from 'react-autosize-textarea';
import {setMockState} from '../scripts/localStore';

const ENTER_KEY_CODE = 13;

const MOCK_USER_ID = 'my_user_id';

class PostTextAreaView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textAreaText: '',
            textAreaEmpty: true,
            replyCommentID: null,
        }
        
        this.focusOnTextArea = this.focusOnTextArea.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    focusOnTextArea() {
        this.textArea.focus();
    }

    onTextAreaChange(event) {
        const textAreaString = event.target.value;
        this.setState({
            textAreaText: textAreaString,
            textAreaEmpty: textAreaString === "",
        });
        // reset replyCommentID if cleared textArea
        if (textAreaString === "") {
            this.setState({
                replyCommentID: null
            });
        }
    }

    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE && !this.state.textAreaEmpty) {
            event.preventDefault();
        }
    }

    onKeyUp(event) {
        // detects enter key press and call onSubmit
        if (event.keyCode === ENTER_KEY_CODE && !this.state.textAreaEmpty) {
            this.onSubmit();
            event.preventDefault();
        }
    }

    /**
     * Handler used by other Reply button to specify which comment to reply under and whom to @
     */
    setReplyContext(replyCommentID, atString) {        
        this.setState({
            replyCommentID: replyCommentID,
            textAreaText: '@' + atString + ' ',
            textAreaEmpty: false
        });
        // clear state
        this.props.setTextAreaState(null, null);
        this.focusOnTextArea();
    }

    onSubmit() {
        if (this.state.textAreaEmpty) {
            return;
        }
        // handle cheat code for resetting local store
        if (this.state.textAreaText === "!reset") {
            setMockState();
            this.setState({textAreaText: '', textAreaEmpty: true});
            return;
        }

        // can't submit one character of new line
        if (this.state.textAreaText !== '\n') {
            // action to reducer
            const timeStamp = Date.now();
            // check if it is comment, or reply
            const replyCommentID = this.state.replyCommentID
            if (replyCommentID) {
                // reply
                this.props.addReply(MOCK_USER_ID, replyCommentID, this.state.textAreaText, timeStamp);
                // clear replyCommentID since we finished that reply
                this.setState({
                    replyCommentID: null,
                });
            } else {
                // comment
                this.props.addComment(MOCK_USER_ID, this.state.textAreaText, timeStamp);
            }
        }
        // clear text area
        this.setState({textAreaText: '', textAreaEmpty: true});

    }

    render() {
        const buttonState = this.state.textAreaEmpty ? "PostTextAreaPostButtonDisable" : "PostTextAreaPostButtonEnable";
        const textAreaReplyID = this.props.textAreaState.commentID;
        const textAreaAtString = this.props.textAreaState.atString;
        // if reply button is pressed, call helper on another thread
        if (textAreaReplyID) {
            setTimeout(()=>{this.setReplyContext(textAreaReplyID, textAreaAtString)}, 0);
        }

        return (
            <section className="PostTextAreaView">
                <form className="PostTextAreaForm">
                    <TextareaAutosize className="PostTextArea" id="textarea"
                        rows={1}
                        maxRows={4}
                        value={this.state.textAreaText}
                        placeholder="Add a comment..." 
                        onChange={this.onTextAreaChange}
                        onKeyUp={this.onKeyUp}
                        onKeyDown={this.onKeyDown}
                        ref={(textArea => { this.textArea = textArea; })}/>
                    <div className="PostTextAreaPostButtonDiv"
                        onClick={this.onSubmit}>
                        <div className={buttonState + " Button"}>
                            Post
                        </div>
                    </div>
                </form>
            </section>
        );
    }

}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        textAreaState: state.textAreaState
    };
}

export default connect(mapStateToProps, {addComment, addReply, setTextAreaState})(PostTextAreaView);