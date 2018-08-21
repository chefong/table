import React from 'react';
import './Intro.css';
import { NavLink } from 'react-router-dom';

const stacks = require('../assets/imgs/table stack.png');

const Intro = () => {
  return (
    <div className="container-fluid intro-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="stacks-container">
            <img src={stacks} alt="table stacks" id="table-stacks"/>
          </div>
        </div>
        <div className="col-md-5 intro-right">
          <p className="table-desc">Tables for you, your friends, and
            <span className="table-italic"> everyone</span> while staying completely <span className="table-italic">anonymous</span>.
          </p>
          <div className="get-started-container">
            <NavLink to="/home"><button type="button" className="btn btn-secondary get-started" onClick={this.handleClick}>Take Me There</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;