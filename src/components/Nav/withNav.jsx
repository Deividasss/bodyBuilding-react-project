import React from 'react';
import { Outlet } from 'react-router';
import Navigation from './Navigation';

const WithNav = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};

export default WithNav