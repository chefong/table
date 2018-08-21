import React, { Component } from 'react';
import './Post.css';

const badgerIcon = require('../assets/imgs/animals/badger.png');
const pigIcon = require('../assets/imgs/animals/pig.png');
const cowIcon = require('../assets/imgs/animals/cow.png');
const bearIconOne = require('../assets/imgs/animals/bear1.png');
const bearIconTwo = require('../assets/imgs/animals/bear2.png');
const dogIcon = require('../assets/imgs/animals/dog.png');
const koalaIcon = require('../assets/imgs/animals/koala.png');
const mooseIcon = require('../assets/imgs/animals/moose.png');
const catIcon = require('../assets/imgs/animals/cat.png');
const chickenIcon = require('../assets/imgs/animals/chicken.png');

class Post extends Component {

  state = {
    id: undefined,
    animal: undefined,
    text: undefined,
    color: undefined,
    count: undefined
  }

  chooseAnimal = () => {
    switch (this.props.animal) {
      case "badger":
        return badgerIcon;
        break;
      case "pig":
        return pigIcon;
        break;
      case "cow":
        return cowIcon;
        break;
      case "bear1":
        return bearIconOne;
        break;
      case "bear2":
        return bearIconTwo;
        break;
      case "dog":
        return dogIcon;
        break;
      case "koala":
        return koalaIcon;
        break;
      case "moose":
        return mooseIcon;
        break;
      case "cat":
        return catIcon;
        break;
      case "chicken":
        return chickenIcon;
    }
  }

  pickColor = () => {
    switch (this.props.color) {
      case "red":
        return "#ea5858";
        break;
      case "orange":
        return "#fbaf5d";
        break;
      case "yellow":
        return "#fff568";
        break;
      case "green":
        return "#77c77b";
        break;
      case "blue":
        return "#779efe";
        break;
      case "purple":
        return "#cd7fe7";
    }
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="post-container">
          <div className="content-container" style={{borderColor: this.pickColor()}}>
            <img src={this.chooseAnimal()} alt="Anonymous animal" className="animal-icon"/>
            <p className="text">{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;