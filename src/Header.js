import React, { Component } from 'react';

import store from './store'

import superagent from 'superagent';

class Header extends Component {

  componentDidMount(){
    this.obtainDogImages();
  }

  obtainDogImages = async() => {
    const response1 = await superagent
      .get("https://dog.ceo/api/breeds/image/random")
      .set("accept", "json");
    const image1 = await response1.body.message;
    const response2 = await superagent
      .get("https://dog.ceo/api/breeds/image/random")
      .set("accept", "json");
    const image2 = await response2.body.message;
    const images = [image1, image2];
    store.dispatch({type: "SET_DOGS", payload: images});
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Colm's Random Doggo App</h1>
          <button type="button" className="btn btn-warning pull-right" onClick={this.obtainDogImages.bind(this)}>Show Next Doggo</button>
        </div>
      </div>
      );
  }
}

export default Header;
