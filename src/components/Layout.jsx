import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/users'}>users</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Layout;