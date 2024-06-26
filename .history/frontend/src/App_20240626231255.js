// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import User from './components/User/User';
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          {/*Cho biết component con được render ở đâu*/}
          <Outlet />
        </div>
      </div>
      <div>
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
