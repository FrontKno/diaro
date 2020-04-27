import React from 'react';
import './Global Styles/App.css';
import './Global Styles/Variables.css';
import Auth from './Components/Auth/Auth';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={MainPage} />
                <Route path="/signin" component={Auth} />
            </BrowserRouter>
        </div>
    );
}

export default App;
