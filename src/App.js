import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logup from './components/Logup'
import Login from './components/Login';
import Logout from './components/Logout';

function App() {

  return (
    <div className="App">
      Welcome to fitness app
      {/* <Logup /> */}
      <Login />
      <Logout />
 
    </div>
  );
}

export default App;
