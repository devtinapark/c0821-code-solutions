import React from 'react';

class ContentRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyClass: ''
    };
    this.setBodyClass = this.setBodyClass.bind(this);
  }

  setBodyClass() {
    const isOpen = this.props.isOpen;
    if (isOpen === true) {
      this.setState = { bodyClass: 'topicBody' };
    } else {
      this.setState = { bodyClass: 'topicBody closed' };
    }
  }

  render() {
    const head = this.props.head;
    const body = this.props.body;
    const bodyClass = this.state.bodyClass;
    return (
      <>
        <div className="topicHead">
          <h3>
            {head}
          </h3>
        </div>
        <div className={bodyClass}>
          <p>
            {body}
          </p>
        </div>
      </>
    );
  }
}

class AccordionContents extends React.Component {
  render() {
    const idOpen = this.props.idOpen;
    const isOpen = this.props.isOpen;
    const rows = [];
    if (isOpen === false) {
      this.props.topics.forEach(topic => {
        rows.push(
          <ContentRow
            isOpen={false}
            head={topic.head}
            body={topic.body} />
        );
      });
    } else {
      this.props.topics.forEach(topic => {
        if (topic.id === idOpen) {
          rows.push(
            <ContentRow
              isOpen={true}
              head={topic.head}
              body={topic.body} />
          );
        } else {
          rows.push(
            <ContentRow
              isOpen={false}
              head={topic.head}
              body={topic.body} />
          );
        }
      });
    }
    return (
      { rows }
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOpen: 1,
      isOpen: false
    };
  }

  render() {
    return (
      <div className="continer">
        <AccordionContents
          topics={ this.props.topics }
          idOpen={ this.state.idOpen }
          isOpen={ this.state.isOpen }
        />
      </div>
    );
  }
}

export default Accordion;
