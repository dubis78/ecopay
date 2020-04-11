import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            ¡Aprende con nosotros!
          </h1>
        </div>
        <div id="movie" className="justify-content-center d-flex align-items-center">
          <ReactPlayer
            url='https://youtu.be/9g2nfYotXCk'
            className='react-player'
            playing
            width='1000px'
            height='600px'
          />
        </div>
      </div>
    );
  }
}

export default Video;

