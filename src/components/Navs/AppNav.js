import React, { Component } from 'react';

//
import './AppNav.css';

class AppNav extends Component {

  // Static properties used in this component
  static propTypes = {
    ariaLabel: React.PropTypes.string,
    class: React.PropTypes.string,
    id: React.PropTypes.string
  }

  render() {

    let hasBtn = this.props.hasBtn;
    let menuButton = null;

    if ( hasBtn === "true" ) {

      menuButton =
        <a href={ '#'+this.props.id } className="app-nav__menu-btn">
          Menu
        </a>
    }

    return (

      <nav id={ this.props.id }
        role="navigation"
        aria-label={ this.props.ariaLabel }
        className={ this.props.class }>

        {menuButton}

        <div className={ this.props.class + "__inner"}>
          <ul className={ this.props.class + "__inner__list"}>
            { this.props.children }
          </ul>
        </div>
      </nav>
    );
  }
}

export default AppNav;
