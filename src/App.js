import './App.css';
import React, { useEffect }from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Logup from './components/Logup'
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import { profile } from './actions/profile'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import ExercisesContainer from './containers/ExercisesContainer';
import { connect } from 'react-redux'
import FindBMI from './components/FindBMI';

function App({profile}) {

  useEffect(() => {
    profile()
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar />
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/exercises" element={<ExercisesContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logup" element={<Logup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
    <FindBMI />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  profile: () => dispatch(profile())
})

export default connect(null, mapDispatchToProps)(App);
