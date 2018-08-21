import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';

const badgerIcon = require('../assets/imgs/animals/badger.png');
const pigIcon = require('../assets/imgs/animals/pig.png');
const cowIcon = require('../assets/imgs/animals/cow.png');
const bearIcon = require('../assets/imgs/animals/bear1.png');
const dogIcon = require('../assets/imgs/animals/dog.png');
const koalaIcon = require('../assets/imgs/animals/koala.png');
const mooseIcon = require('../assets/imgs/animals/moose.png');
const catIcon = require('../assets/imgs/animals/cat.png');
const chickenIcon = require('../assets/imgs/animals/chicken.png');

const handNew = require('../assets/imgs/hand new.png');
const handOld = require('../assets/imgs/hand old.png')

class Post extends Component {

  state = {
    counted: false,
    count: undefined
  }

  chooseAnimal = () => {
    switch (this.props.avatarIcon.toLowerCase()) {
      case "badger":
        return badgerIcon;
      case "pig":
        return pigIcon;
      case "cow":
        return cowIcon;
      case "bear":
        return bearIcon;
      case "dog":
        return dogIcon;
      case "koala":
        return koalaIcon;
      case "moose":
        return mooseIcon;
      case "cat":
        return catIcon;
      case "chicken":
        return chickenIcon;
      default:
        return chickenIcon;
    }
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

    axios.put(`http://localhost:5000/api/posts/${this.props.id}`, {
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
    if (this.state.counted) {
      return handOld;
    }
    else {
      return handNew;
    }
  }

  componentDidMount = () => {
    this.setState({
      count: this.props.count,
      counted: JSON.parse(localStorage.getItem("counted " + this.props.id))
    })
  }

  componentDidUpdate = () => {
    localStorage.setItem("counted " + this.props.id, JSON.stringify(this.state.counted));
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="post-container">
          <div className="content-container" style={{borderColor: this.pickColor()}}>
            <img src={this.chooseAnimal()} alt="Anonymous animal" className="animal-icon"/>
            <p className="text">{this.props.text}</p>
            <div className="hand-container">
              <img src={this.checkCounted()} alt="hand count" className="hand-count" onClick={this.increaseCount}/>
              <p className="count-number"><strong>{this.state.count}</strong></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;