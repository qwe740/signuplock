import React from 'react';
import './nav.css';
class Nav extends React.Component {
    render() {
        return(
            <div className="Nav">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Calculations</a>
                <a href="#" className="nav-link">Odds</a>
            </div>
        )
    }
}

export default Nav;