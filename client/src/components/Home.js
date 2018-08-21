import React, { Component } from 'react';
import './Home.css';
import Post from './Post';
import { NavLink } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import axios from 'axios';

class Home extends Component {

  state = {
    posts: undefined,
    pageLoading: false,
    modalOpen: false
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

    axios.post('http://localhost:5000/api/posts', {
      name: userAvatar,
      color: userColor.toLowerCase(),
      text: userText,
      count: 0
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));

    window.location.reload();
  }

  componentDidMount = () => {
    this.setState({pageLoading: true});

    // Get and store all table posts on load
    axios.get('http://localhost:5000/api/posts')
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
        <div className="page-loading-container">loading</div>
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
                        <select className="form-control input-text" name="userAvatar">
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
                    </div>
                    <p className="form-text">Pick a color for your table!</p>
                    <div className="row">
                      <div className="col-md-6">
                      <select className="form-control input-text" name="userColor">
                          <option>Red</option>
                          <option>Orange</option>
                          <option>Yellow</option>
                          <option>Green</option>
                          <option>Blue</option>
                          <option>Purple</option>
                          <option>Black</option>
                        </select>
                      </div>
                    </div>
                    <p className="form-text">Lastly, share what you want to talk about.</p>
                    <textarea className="form-control textarea-text" name="userText" placeholder="Type something..." rows="3"></textarea>
                    <div className="form-button-container">
                      <button type="button" className="btn btn-danger cancel-button" onClick={this.toggleModal}>Cancel</button>
                      <button className="btn btn-secondary submit-button">Submit</button>
                    </div>
                  </form>
                </ModalBody>
              </Modal>
            </div>
          </div>
          <div className="row posts-container">
            {this.state.posts && this.state.posts.map(post => {
              return (
                <Post 
                  id={post._id}
                  animal={post.name}
                  text={post.text}
                  color={post.color}
                  count={post.count}/>
              )
            })}
          </div>
        </div>
      )
    )
  }
}

export default Home;
