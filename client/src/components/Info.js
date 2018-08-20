import React from 'react';
import './Info.css';

const anonymous = require('../assets/imgs/anonymous.png');

const Info = () => {
  return (
    <div className="container-fluid info-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="subtitle">...so what in the <span className="subtitle-italic">heck</span> is table?</h2>
          <p className="subtitle-desc">
            <strong>Table</strong> is a supportive community for individuals to be open about any problems. Whether
            it be about anxiety, depression, family issues, or school, there's no need to be afraid
            of speaking out because everyone deserves to have a voice. Like you, everyone is anonymous 
            and bringing something to the <strong>table</strong> too!
          </p>
        </div>
        <div className="col-md-4">
          <div className="anonymous-container">
            <img src={anonymous} alt="anonymous people" id="anonymous-people"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;