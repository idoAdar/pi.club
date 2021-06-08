import React from 'react';
import NavItem from '../NavItem/NavItem';

import './Nav.css';

const Nav = (props) => {
    return (
        <div className={'main-nav'}>
            {props.days.map(day => {
                return <NavItem key={day.dt}
                    day={day.cur}
                    deg={day.deg}/>
            })}
        </div>
    )
}

export default Nav;