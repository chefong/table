import React, { Component } from 'react';
import './Post.css';
import Fade from 'react-reveal/Fade';
import { Popover, PopoverBody } from 'reactstrap';
import axios from 'axios';

const handNew = require('../assets/imgs/hand new.png');
const handOld = require('../assets/imgs/hand old.png');

const leftArrow = require('../assets/imgs/left-arrow.png');
const rightArrow = require('../assets/imgs/right-arrow.png');

const comment = require('../assets/imgs/comment.png');

class Post extends Component {

  state = {
    counted: false,
    count: undefined,
    commentIndex: 0,
    commentBox: false,
    success: true
  }

  pickColor = () => {
    switch (this.props.color) {
      case "red":
        return "#ea5858";
      case "orange":
        return "#fbaf5d";
      case "yellow":
        return "#fff568";
      case "green":
        return "#77c77b";
      case "blue":
        return "#779efe";
      case "purple":
        return "#cd7fe7";
      case "black":
        return "#000000";
      default:
        return "#000000";
    }
  }

  increaseCount = () => {
    if (this.state.counted) {
      return;
    }

    axios.put(`https://lit-forest-48274.herokuapp.com/api/posts/${this.props.id}`, {
      count: this.state.count + 1
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
    
    this.setState({
      count: this.state.count + 1,
      counted: true
    });
  }

  checkCounted = () => {
    return this.state.counted ? handOld : handNew;
  }

  rightArrowClick = () => {
    this.setState({
      commentIndex: this.state.commentIndex + 1
    })
  }

  leftArrowClick = () => {
    this.setState({
      commentIndex: this.state.commentIndex - 1
    })
  }

  toggleCommentBox = () => {
    this.setState({
      commentBox: !this.state.commentBox
    })
  }

  submitComment = e => {
    e.preventDefault();

    let userComments = this.props.comments;
    userComments.push(e.target.elements[0].value);

    axios.put(`https://lit-forest-48274.herokuapp.com/api/posts/${this.props.id}`, {
      comments: userComments
    })
    .then(res => {
      console.log(res);
      this.setState({success: true});
    })
    .catch(err => {
      console.log(err);
      this.setState({success: false});
      return;
    });

    this.setState({
      commentIndex:  userComments.length - 1,
      commentBox: false
    })
  }

  componentDidMount = () => {
    this.setState({
      count: this.props.count,
      counted: JSON.parse(localStorage.getItem("counted " + this.props.id)),
      commentIndex: 0
    })
  }

  componentDidUpdate = () => {
    localStorage.setItem("counted " + this.props.id, JSON.stringify(this.state.counted));
  }

  render() {
    return (
      <Fade bottom>
        <div className="col-md-4">
          <div className="post-container">
            <div className="content-container" style={{borderColor: this.pickColor()}}>
              <div className="avatar-container">
                <img src={this.props.avatarIcon} alt="Anonymous animal" className="animal-icon"/>
              </div>
              <div className="text-container">
                <p className="text">{this.props.text}</p>
              </div>
              {this.props.comments.length > 0 && 
                <div className="row justify-content-center comments-outer-container">
                  <div className="col-md-2 col-2">
                    <div className="arrow-container">
                      {this.state.commentIndex > 0 && <img src={leftArrow} alt="left arrow" className="left-arrow" onClick={this.leftArrowClick}/>}
                    </div>
                  </div>
                  <div className="col-md-8 col-8">
                    <div className="comments-container">
                      <p className="comments-subtitle">COMMENTS</p>
                      <div className="comment-text-container">
                        <p className="comments">{this.props.comments[this.state.commentIndex]}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-2">
                    <div className="arrow-container">
                      {this.state.commentIndex < this.props.comments.length - 1 && <img src={rightArrow} alt="right arrow" className="right-arrow" onClick={this.rightArrowClick}/>}
                    </div>
                  </div>
                </div>}
                <Popover className="popover-comment" placement="top" isOpen={this.state.commentBox} target={"popover" + this.props.id} toggle={this.toggleCommentBox}>
                  <PopoverBody>
                    <form onSubmit={this.submitComment}>
                      <p className="comment-title">Comment: </p>
                      <textarea name={"comment" + this.props.id} cols="30" rows="3" className="form-control comment-box" placeholder="Your comment..."></textarea>
                      <div className="button-submit-container">
                        <button className="btn btn-secondary submit-button">Submit</button>
                      </div>
                    </form>
                    {!this.state.success && 
                      <div className="alert alert-dark" role="alert">
                        Oops! Something went wrong.
                      </div> }
                  </PopoverBody>
                </Popover>
              <div className="row justify-content-center foot-container">
                <div className="col-md-4 col-4">
                  <div className="hand-icon-container">
                    <img src={this.checkCounted()} alt="hand count" className="hand-count" onClick={this.increaseCount}/>
                    <p className="count-number"><strong>{this.state.count}</strong></p>
                  </div>
                </div>
                <div className="col-md-4 col-4">
                  <div className="comment-icon-container">
                    <img src={comment} alt="comment icon" className="comment-icon" id={"popover" + this.props.id} onClick={this.toggleCommentBox}/>
                    <p className="count-number"><strong>{this.props.comments.length}</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}

export default Post;