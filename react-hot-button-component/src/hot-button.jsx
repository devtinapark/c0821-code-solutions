import React from 'react';

function B1(props) {
  return <button className="B1" onClick={props.onClick}>Hot Button</button>;
}
function B2(props) {
  return <button className="B2" onClick={props.onClick}>Hot Button</button>;
}
function B3(props) {
  return <button className="B3" onClick={props.onClick}>Hot Button</button>;
}
function B4(props) {
  return <button className="B4" onClick={props.onClick}>Hot Button</button>;
}
function B5(props) {
  return <button className="B5" onClick={props.onClick}>Hot Button</button>;
}
function B6(props) {
  return <button className="B6" onClick={props.onClick}>Hot Button</button>;
}
function B7(props) {
  return <button className="B7" onClick={props.onClick}>Hot Button</button>;
}

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleOneClick = this.handleOneClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleOneClick() {
    let currentClicks = this.state.clicks;
    currentClicks++;
    this.setState({ clicks: currentClicks });
  }

  render() {
    if (this.state.clicks < 3) {
      return <B1 onClick={this.handleOneClick} />;
    } else if (this.state.clicks < 6) {
      return <B2 onClick={this.handleOneClick} />;
    } else if (this.state.clicks < 9) {
      return <B3 onClick={this.handleOneClick} />;
    } else if (this.state.clicks < 12) {
      return <B4 onClick={this.handleOneClick} />;
    } else if (this.state.clicks < 15) {
      return <B5 onClick={this.handleOneClick} />;
    } else if (this.state.clicks < 18) {
      return <B6 onClick={this.handleOneClick} />;
    } else {
      return <B7 onClick={this.handleOneClick} />;
    }
  }
}

export default HotButton;
