import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchStatus: 'off' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { switchStatus } = this.state;
    if (switchStatus === 'on') {
      this.setState({ switchStatus: 'off' });
    } else {
      this.setState({ switchStatus: 'on' });
    }
  }

  getSwitchClass() {
    const { switchStatus } = this.state;
    if (switchStatus === 'on') {
      return 'switchOn';
    } else {
      return 'switchOff';
    }
  }

  getText() {
    const { switchStatus } = this.state;
    if (switchStatus === 'on') {
      return 'ON';
    } else {
      return 'OFF';
    }
  }

  render() {
    const switchClass = this.getSwitchClass();
    const text = this.getText();
    return (
    <div>
    <button
    onClick={ this.handleClick }
    className={ switchClass }>
    </button>
    <button
      className="text">
        { text }
    </button>
    </div>
    );
  }
}

ReactDOM.render(
  <ToggleSwitch />,
  document.getElementById('root')
);
