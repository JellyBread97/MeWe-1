import Jumbo from "./components/Jumbo";
import NavbarTop from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Jumbo />
    </div>
  );
}

export default App;
