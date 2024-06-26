// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        test link
        <div>
          <button>
            <Link to={`contacts/1`}>Your Name</Link>
            go to user page
          </button>
          <button>go to admin page</button>
        </div>
      </div>
    </div>
  );
}

export default App;
