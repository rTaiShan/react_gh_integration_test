import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact'

const renderPaths = (paths: string[], Element: JSX.Element) =>
  paths.map((path) => <Route key={path} path={path} element={Element} />);

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Routes>
              {renderPaths(["/", "/home"], <Home />)}
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
    );
  }
}

export default App;
