// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AppMainPage from './AppMainPage';
import AppThanksPage from './AppThanksPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/thanks">
                        <AppThanksPage></AppThanksPage>
                    </Route>
                    <Route path="/">
                        <AppMainPage></AppMainPage>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
