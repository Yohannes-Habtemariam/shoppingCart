import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./views/Main";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main/>} />
          </Routes>
        </main>
        <footer></footer>
      </Router>
    </div>
  );
};

export default App;
