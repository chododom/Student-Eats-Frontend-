import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from "./components/HelloComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <HelloComponent/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload. HELLO WORLD!!!!
                    </p>
                </header>
                <main>
                    <section>
                        <p>Main section</p>
                    </section>
                </main>
                <footer>



                </footer>
            </div>
        );
    }
}

export default App;
