import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Profile } from "./pages/Profile";
import { useState, createContext } from "react";
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("mecha");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <div>
            <Link to="/">HOME </Link>
            <Link to="/menu">MENU </Link>
            <Link to="/profile">PROFILE </Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
