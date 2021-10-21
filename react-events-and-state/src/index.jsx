import React from 'react';
import ReactDOM from 'react-dom';

function ButtonYC(props) {
  return <button onClick={props.onClick}>You clicked me.</button>;
}

function ButtonNC(props) {
  return <button onClick={props.onClick}>Please click here.</button>;
}

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return <ButtonYC onClick={this.handleClick} />;
    } else {
      return <ButtonNC onClick={this.handleClick} />;
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
