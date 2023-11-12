import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'

// Pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import DetailPage from "./pages/DetailPage";

// Components
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
          <footer>
        <Link to="/" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </Link>
        <Link to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </Link>
      </footer>
      </Router>
    </div>
  );
}

export default App;
