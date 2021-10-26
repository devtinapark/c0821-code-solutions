import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    for (let i = 0; i < data.length; i++) {

    }
    return (
      <div className="continer">
        <TopicHead />
        <TopicBody />
      </div>
    );
  }
}
