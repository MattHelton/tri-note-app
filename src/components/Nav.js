import React, { Component } from 'react';
class Nav extends Component {
  state = {  }
  render() { 
    return (  
      <div className="nav-container">
        <div className="nav-logo">Note</div>
        <div className="nav-button">
          + Note
        </div>
      </div>
    );
  }
}
 
export default Nav;