import React from 'react';
import './Info.css';

const anonymous = require('../assets/imgs/anonymous.png');
const tableExample = require('../assets/imgs/table-example.png');

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
      <div className="table-info-container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="table-desc-container">
            	<p className="table-desc">
                Express your problems using a table. Who knows, you might also be helping out someone too!
              </p>
              <p className="table-desc">
                Click on the left and right arrows to see what others have said. Hopefully their answers make you feel at ease.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="table-container">
            	<img src={tableExample} alt="Table" id="table-example"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="table-desc-container">
            	<p className="table-desc">
                Upvote someone's table to let them know that you agree or that you're there for them. At the end of the day,
                we're all one big community.
              </p>
              <p className="table-desc">
                Respond to someone by clicking on the comment icon. Your words can definitely mean a lot to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;