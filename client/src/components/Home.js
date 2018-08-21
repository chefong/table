import React, { Component } from 'react';
import './Home.css';
import Post from './Post';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

  state = {
    posts: undefined,
    pageLoading: false
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
              <h1 id="welcome">Welcome to <strong>table</strong>.</h1>
            </div>
            <div className="col-md-3 create-container">
              <button type="button" className="btn btn-secondary create-button">+ Create</button>
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
