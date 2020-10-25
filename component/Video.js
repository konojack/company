import React, { Component, useState, useEffect, useRef } from 'react';
import { Player, ControlBar } from 'video-react';
import { Left } from '../svg/Svg';

//https://video-react.js.org/components/player/

export default class Video extends Component {
  state = {
    showVideo: false,
    innerWidth: 0,
  };

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));

    setTimeout(() => {
      this.setState({ showVideo: true });
    }, 1000);

    this.setState({ innerWidth: window.innerWidth });

    setTimeout(() => {
      this.play();
    }, 1000);
  }

  handleStateChange = (state) => {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
  };

  play = () => {
    this.player.play();
  };

  pause = () => {
    this.player.pause();
  };

  hideOrOpen = () => {
    if (this.state.showVideo === true) {
      this.setState({ showVideo: false });
      this.pause();
      // set to 0sec
      this.player.seek(0);
    } else {
      this.setState({ showVideo: true });
      setTimeout(() => {
        this.play();
      }, 1000);
    }
  };

  render() {
    return (
      <div className={`interactive ${this.state.showVideo ? 'open' : ''}`}>
        <span
          className={`toggleVideo`}
          onClick={() => this.hideOrOpen()}
        >
          <Left />
        </span>
        <div>
          {this.state.innerWidth < 425 && (
            <Player
              ref={(player) => {
                this.player = player;
              }}
              poster='./teacher.png'
              width={200}
              height={113}
              fluid={false}
            >
              <source src='./video.mp4' />
              <ControlBar autoHide={false} />
            </Player>
          )}
          {this.state.innerWidth >= 425 && this.state.innerWidth < 768 && (
            <Player
              ref={(player) => {
                this.player = player;
              }}
              poster='./teacher.png'
              width={250}
              height={142}
              fluid={false}
            >
              <source src='./video.mp4' />
              <ControlBar autoHide={false} />
            </Player>
          )}
          {this.state.innerWidth >= 768 && this.state.innerWidth < 1024 && (
            <Player
              ref={(player) => {
                this.player = player;
              }}
              poster='./teacher.png'
              width={280}
              height={159}
              fluid={false}
            >
              <source src='./video.mp4' />
              <ControlBar autoHide={false} />
            </Player>
          )}
          {this.state.innerWidth >= 1024 && (
            <Player
              ref={(player) => {
                this.player = player;
              }}
              poster='./teacher.png'
              width={300}
              height={170}
              fluid={false}
            >
              <source src='./video.mp4' />
              <ControlBar autoHide={false} />
            </Player>
          )}
        </div>
      </div>
    );
  }
}
