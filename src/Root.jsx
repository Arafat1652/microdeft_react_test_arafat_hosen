import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Root = () => {
    const [token, setToken] = useState(localStorage.getItem("authToken") || "");

    const handleSetToken = (newToken) => {
      setToken(newToken);
      localStorage.setItem("authToken", newToken);
    };
  
    return (
        <div>
            <Nav/>
            <Outlet context={{ token, setToken: handleSetToken }} />
            <Footer/>
        </div>
    );
};

export default Root;