import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logup from './components/Logup'
import Login from './components/Login';
import Logout from './components/Logout';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
    <NavBar />
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/logup" element={<Logup />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
