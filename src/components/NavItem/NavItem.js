import React from 'react';

import './NavItem.css';

const NavItem = props => {
    return (
        <div className={'nav-item'}>
            <p>{props.day}</p>
            <div>
                {props.deg > 250 ? (
                    <i className="fas fa-cloud-sun-rain fa-2x"></i>
                ) : (
                    <i className="fas fa-sun fa-2x"></i>
                )}
                <p>{props.deg}</p>
            </div>
        </div>
    )
}

export default NavItem;