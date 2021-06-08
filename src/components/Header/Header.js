import React from 'react';

import './Header.css';

const Header = props => {
    const temp = props.day.temp.day;
    const description = props.day.weather[0].description;

    return (
        <div className={'header-grid'}>
            <div>
                <p>Tonight</p>
            </div>
            <div>
                <i className="fas fa-moon fa-2x"></i>
                <p>{temp}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Header;