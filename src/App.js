import React, { Component } from 'react';
import './App.css';
import LoanPage from './components/LoanPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Loan Calculator</h1>
                </header>
                <div className="App-content">
                    <LoanPage />
                </div>
            </div>
        );
    }
}

export default App;
