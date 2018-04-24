import React, { Component } from 'react';
import {connect} from "react-redux";
import store from './store';

function mapStateToProps(state) {
  return {
    dogs : store.getState().dog.dogs,
  };
}

class FullBody extends Component {
  render() {
    let dogs = this.props.dogs;
    if(!dogs || dogs.length !== 2) {
      dogs = [];
      dogs.push("https://images.dog.ceo/breeds/briard/n02105251_1725.jpg");
      dogs.push("https://images.dog.ceo/breeds/spaniel-welsh/n02102177_3438.jpg");
    }
    return (
        <div className="container-fluid">
           <div className="col-md-12">
             <div className="col-md-6">
                <div className="jumbotron">
                  <img className="img-responsive center-block" alt="Doggo1" src={dogs[0]}/>
                </div>
             </div>
             <div className="col-md-6">
                <div className="jumbotron">
                  <img className="img-responsive center-block" alt="Doggo2" src={dogs[1]}/>
                </div>
             </div>
           </div>
         </div>
      );
  }
}

export default connect(mapStateToProps)(FullBody);
