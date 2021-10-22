import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playOrPause: 'pause' };
    this.state = { seconds: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
    this.playSeconds = this.playSeconds.bind(this);
    this.pauseSeconds = this.pauseSeconds.bind(this);
  }

  getIconName() {
    const { playOrPause } = this.state;
    if (playOrPause === 'play') {
      return 'pause';
    } else {
      return 'play';
    }
  }

  handleClick() {
    const { playOrPause } = this.state;
    if (playOrPause === 'play') {
      this.setState({ playOrPause: 'pause' });
      this.pauseSeconds();
    } else {
      this.setState({ playOrPause: 'play' });
      this.playSeconds();
    }
  }

  tick() {
    const newSecond = this.state.seconds + 1;
    this.setState({ seconds: newSecond });
  }

  playSeconds() {
    this.timer = setInterval(this.tick, 1000);
  }

  pauseSeconds() {
    clearInterval(this.timer);
  }

  render() {
    const iconName = this.getIconName();
    const displaySeconds = this.state.seconds;
    return (
    <>
      <div className="circle centered">
        <p>{ displaySeconds }</p>
      </div>
      <div className="relative">
      </div>
        <i
          onClick={ this.handleClick }
          className={ `fas fa-${iconName} fa-2x` }>
        </i>
    </>
    );
  }
}

export default StopWatch;
