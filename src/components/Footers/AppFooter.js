import React, { Component } from 'react';
// import 'AppFooter.css';

class AppFooter extends Component {

  // Static properties used in this component
  static propTypes = {
    class: React.PropTypes.string,
    id: React.PropTypes.string,
    role: React.PropTypes.string
  }

  render() {

    return (
      <footer id={this.props.id}
        role={this.props.role}
        className={this.props.class}>

        <div className="content-area">

          { this.props.children }

        </div>

      </footer>
    );
  }
}

export default AppFooter;
