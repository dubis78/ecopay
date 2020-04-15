import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Video extends Component {
  render() {
    return (

      <div
        className="movie"
      >              
        <div
          className="container"
        >
          <h1
            className="text-center p-3"
          >
            ¡Aprende con nosotros!
        </h1>
        </div>
        <div
          id="movie"
          className="justify-content-center d-flex align-items-center p-5"
        >
          <ReactPlayer
            url='https://youtu.be/9g2nfYotXCk'
            className='react-player'
            playing
            width='800px'
            height='400px'
          />
        </div>
      </div>
    );
  }
}

export default Video;

