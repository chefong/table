import React, { Component } from 'react';
import './Home.css';
import Post from './Post';
import { NavLink } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import axios from 'axios';

const spinner1 = require('../assets/imgs/spinner1.svg');
const spinner2 = require('../assets/imgs/spinner2.svg');

const badgerIcon = require('../assets/imgs/animals/badger.png');
const pigIcon = require('../assets/imgs/animals/pig.png');
const cowIcon = require('../assets/imgs/animals/cow.png');
const bearIcon = require('../assets/imgs/animals/bear1.png');
const dogIcon = require('../assets/imgs/animals/dog.png');
const koalaIcon = require('../assets/imgs/animals/koala.png');
const mooseIcon = require('../assets/imgs/animals/moose.png');
const catIcon = require('../assets/imgs/animals/cat.png');
const chickenIcon = require('../assets/imgs/animals/chicken.png');

const redBlock = require('../assets/imgs/blocks/red.png');
const orangeBlock = require('../assets/imgs/blocks/orange.png');
const yellowBlock = require('../assets/imgs/blocks/yellow.png');
const greenBlock = require('../assets/imgs/blocks/green.png');
const blueBlock = require('../assets/imgs/blocks/blue.png');
const purpleBlock = require('../assets/imgs/blocks/purple.png');
const blackBlock = require('../assets/imgs/blocks/black.png');

class Home extends Component {

  state = {
    posts: undefined,
    pageLoading: false,
    modalOpen: false,
    createLoading: false,
    currentAvatar: "badger",
    currentColor: "red"
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    
    let userAvatar = e.target.elements.userAvatar.value;
    let userColor = e.target.elements.userColor.value;
    let userText = e.target.elements.userText.value;

    this.setState({createLoading: true});

    axios.post('/api/posts', {
      name: userAvatar,
      color: userColor.toLowerCase(),
      text: userText,
      count: 0
    })
    .then(res => {
      console.log(res);
      this.setState({createLoading: false});
    })
    .catch(err => console.log(err));
    
    window.location.reload();
  }

  setAvatar = e => {
    this.setState({currentAvatar: e.target.value.toLowerCase()});
  }

  chooseAvatar = avatar => {
    switch (avatar.toLowerCase()) {
      case "badger":
        return badgerIcon;
      case "bear":
        return bearIcon;
      case "cat":
        return catIcon;
      case "chicken":
        return chickenIcon;
      case "cow":
        return cowIcon;
      case "dog":
        return dogIcon;
      case "koala":
        return koalaIcon;
      case "moose":
        return mooseIcon;
      case "pig":
        return pigIcon;
      default:
        return pigIcon;
    }
  }

  setColor = e => {
    this.setState({currentColor: e.target.value.toLowerCase()});
  }

  chooseColor = () => {
    switch (this.state.currentColor) {
      case "red":
        return redBlock;
      case "orange":
        return orangeBlock;
      case "yellow":
        return yellowBlock;
      case "green":
        return greenBlock;
      case "blue":
        return blueBlock;
      case "purple":
        return purpleBlock;
      case "black":
        return blackBlock;
      default:
        return blackBlock;
    }
  }

  componentDidMount = () => {
    this.setState({pageLoading: true});

    // Get and store all table posts on load
    axios.get('/api/posts')
      .then(res => {
        console.log(res.data);
        this.setState({
          posts: res.data,
          pageLoading: false
        });
      })
  }

  render() {
    return (
      this.state.pageLoading ? (
        <div className="page-loading-container">
          <div className="spinner-container"><img src={spinner1} alt="spinner" id="spinner1"/></div>
          <h1 className="loading-message">Please wait while we fetch all the tables...</h1>
        </div>
      ) : (
        <div className="container-fluid home-container">
          <div className="row justify-content-center welcome-home-container">
            <div className="col-md-5">
              <h1 id="welcome">Welcome to <NavLink to="/" className="back"><strong>table</strong></NavLink>.</h1>
            </div>
            <div className="col-md-3 create-container">
              <button type="button" className="btn btn-secondary create-button" onClick={this.toggleModal}>+ Create</button>
              <Modal centered isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                <ModalBody>
                  <form onSubmit={this.handleSubmit}>
                    <p className="form-text">Pick an avatar! Don't worry, you'll be anonymous.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <select className="form-control input-text" name="userAvatar" onChange={this.setAvatar}>
                          <option>Badger</option>
                          <option>Bear</option>
                          <option>Cat</option>
                          <option>Chicken</option>
                          <option>Cow</option>
                          <option>Dog</option>
                          <option>Koala</option>
                          <option>Moose</option>
                          <option>Pig</option>
                        </select>
                      </div>
                      <div className="col-md-3 col-3">
                        {this.state.currentAvatar && <img src={this.chooseAvatar(this.state.currentAvatar)} alt="selected avatar" className="form-avatar"/>}
                      </div>
                    </div>
                    <p className="form-text">Pick a color for your table!</p>
                    <div className="row">
                      <div className="col-md-6 col-6">
                      <select className="form-control input-text" name="userColor" onChange={this.setColor}>
                          <option>Red</option>
                          <option>Orange</option>
                          <option>Yellow</option>
                          <option>Green</option>
                          <option>Blue</option>
                          <option>Purple</option>
                          <option>Black</option>
                        </select>
                      </div>
                      <div className="col-md-3 col-3">
                        {this.state.currentColor && <img src={this.chooseColor()} alt="selected color" className="color-block"/>}
                      </div>
                    </div>
                    <p className="form-text">Lastly, share what you want to talk about.</p>
                    <textarea className="form-control textarea-text" name="userText" placeholder="Type something..." rows="3"></textarea>
                    <div className="form-button-container">
                      <button type="button" className="btn btn-danger cancel-button" onClick={this.toggleModal}>Cancel</button>
                      <button className="btn btn-secondary submit-button">Submit</button>
                      {this.state.createLoading && <img src={spinner2} alt="loading spinner"/>}
                    </div>
                  </form>
                </ModalBody>
              </Modal>
            </div>
          </div>
          <div className="container-fluid">
          	<div className="row posts-container">
          	  {this.state.posts && this.state.posts.map(post => {
          	    return (
          	      <Post
          	        key={post._id}
          	        id={post._id}
          	        avatar={post.name}
          	        avatarIcon={this.chooseAvatar(post.name)}
          	        text={post.text}
          	        comments={post.comments}
          	        color={post.color}
          	        count={post.count}/>
          	    )
          	  })}
          	</div>
          </div>
        </div>
      )
    )
  }
}

export default Home;
