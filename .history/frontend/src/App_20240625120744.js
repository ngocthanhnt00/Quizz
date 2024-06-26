// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import User from './components/User/User';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        test link
        <div>
          <button>go to user page</button>
          <button>go to admin page</button>
        </div>
      </div>
    </div>
  );
}

export default App;
