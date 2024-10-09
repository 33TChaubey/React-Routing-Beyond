import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDetail from '../components/UserDetail';
import Home from '../components/Home';
import About from '../components/About';
import User from '../components/User';

const Routing = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />}>

        <Route path="/user/:name" element={<UserDetail />} />

      </Route>


    </Routes>

  )
}

export default Routing
