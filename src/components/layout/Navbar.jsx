import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

export default props => {

    const getDropdownItems = (items=[]) => items.map(item => (
        <Fragment>
            <a className="dropdown-item" href={item.ref}>{item.name}</a>
            <div className="dropdown-divider"></div>
        </Fragment>
    ));   

    function getMainItems () {
        const items = props.navItems || [];
        return items.map((item, index) => {
            if(Array.isArray(item.ref))
                return (
                    <li key={`nav_${index}`} className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" 
                            href="/" 
                            id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                            {item.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {getDropdownItems(item.ref)}
                        </div>
                    </li>
                );
            else
                return (
                    <li key={`nav_${index}`} className="nav-item active">
                        <Link className="nav-link" to={item.ref}>{item.name}</Link>
                    </li>
                );
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} height="30" alt="Logo" className="navbar-logo"/>
            </Link>
            <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {getMainItems()}
                </ul>
            </div>
        </nav>
    );
}