// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>

      </div>
      <div className='side'>

      </div>
      <Header />
      <div>
        test link
        <div>
          <button>
            <Link to={`/users`}>Go to user page</Link>
          </button>
          <button>
            <Link to={`/admin`}>Go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
