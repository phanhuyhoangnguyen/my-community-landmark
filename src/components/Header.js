import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>My Community Landmark</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    </header>
);

export default Header;