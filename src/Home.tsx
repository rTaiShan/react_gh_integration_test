import './App.css';
import React from 'react';
import logo from './logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Home Page</h2>
                <p>
                    Welcome to my site. It uses <code>Github Pages</code>, <code>React</code> and <code>TypeScript</code>.
                </p>
                </header>
            </div>
            
        );
    }

}

export default Home;
