import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const TOPICS = [
  {
    id: 1,
    head: 'How to Succeed in Software Engineering',
    body: 'Just keep coding'
  },
  {
    id: 2,
    head: 'How to Have fun in Life',
    body: 'Believe in yourself and strive for a balance in life'
  },
  {
    id: 3,
    head: 'How to be Healhy',
    body: 'Take care of your diet, workout, and sleep habits'
  }
];

ReactDOM.render(
  console.log(TOPICS);
  <Accordion topics={TOPICS} />,
  document.getElementById('root')
);
