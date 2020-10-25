import React, { Component, useState, useEffect, useRef } from 'react';
import { Player, ControlBar } from 'video-react';
import { Left } from '../svg/Svg';

//https://video-react.js.org/

export default class Video extends Component {
  state = {
    showVideo: false,
    innerWidth: 0,
  };

  componentDidMount() {
    // subscribe state change
    // this.player.subscribeToStateChange(this.handleStateChange.bind(this));

    setTimeout(() => {
      this.setState({ showVideo: true });
    }, 1000);

    this.setState({ innerWidth: window.innerWidth });

    // setTimeout(() => {
    //   this.play();
    // }, 1000);
  }

  // handleStateChange = (state) => {
  //   // copy player state to this component's state
  //   this.setState({
  //     player: state,
  //   });
  // };

  // play = () => {
  //   this.player.play();
  // };

  // pause = () => {
  //   this.player.pause();
  // };

  // hideOrOpen = () => {
  //   if (this.state.showVideo === true) {
  //     this.setState({ showVideo: false });
  //     this.pause();
  //     // set to 0sec
  //     this.player.seek(0);
  //   } else {
  //     this.setState({ showVideo: true });
  //     setTimeout(() => {
  //       this.play();
  //     }, 1000);
  //   }
  // };

  render() {
    return (
      <div className={`interactive ${this.state.showVideo ? 'open' : ''}`}>
        <span className={`toggleVideo`} onClick={() => this.hideOrOpen()}>
          <Left />
        </span>
        <div>
          {this.state.innerWidth < 425 && (
            <video width='200' height='113' controls>
              <source src='./video.mp4' type='video/mp4' />
            </video>
          )}
          {this.state.innerWidth >= 425 && this.state.innerWidth < 768 && (
            <video width='250' height='142' controls>
              <source src='./video.mp4' type='video/mp4' />
            </video>
          )}
          {this.state.innerWidth >= 768 && this.state.innerWidth < 1024 && (
            <video width='280' height='159' controls>
              <source src='./video.mp4' type='video/mp4' />
            </video>
          )}
          {this.state.innerWidth >= 1024 && (
            <video width='300' height='170' controls>
              <source src='./video.mp4' type='video/mp4' />
            </video>
          )}
        </div>
      </div>
    );
  }
}
