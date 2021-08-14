import React from 'react';

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: 'value'
    };
  }

  render() {
    return (
      <>
        <h1>{ this.state.example }</h1>
        <h2>{ this.props.someProp }</h2>
      </>
    );
  }
}
