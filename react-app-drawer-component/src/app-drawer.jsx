import React from 'react';
export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.doOpen = this.doOpen.bind(this);
    this.doClose = this.doClose.bind(this);
  }

  doOpen() {
    this.setState({ open: true });
  }

  doClose() {
    this.setState({ open: false });
  }

  render() {
    return (
        <>
          <i
            id="drawer-button"
            className="fas fa-bars fa-2x"
            onClick={ this.doOpen }></i>
          <div
          className={ this.state.open ? 'shaded' : 'shaded hidden' }
          onClick={ this.doClose }></div>
          <div className={ this.state.open ? 'menu-container' : 'menu-container closed' }>
            <div className="menu-contents">
              <button className="menu-header">Menu</button>
              <button className="link" onClick={this.doClose}>About</button>
              <button className="link" onClick={this.doClose}>Get Started</button>
              <button className="link" onClick={this.doClose}>Sign In</button>
            </div>
          </div>
        </>
    );
  }
}
