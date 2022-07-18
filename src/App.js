import logo from "./images/tenor-logo.svg";
import "./App.css";
import Search from "./Search.js";
import Trending from "./Trending";

function App() {
  return (
    <div className="head">
      <header className="head-container">
        <img src={logo}></img>
      </header>

      <div className="search">
        <Search />
      </div>

      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
