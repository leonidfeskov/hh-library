import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './app.css';
import logoImg from './logo.svg';
import BooksList from '../../containers/BooksList';
import User from '../User';
import Menu from '../Menu';


class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="panel">
                    <div className="main-logo">
                        <a href="/" className="main-logo">
                            <img src={logoImg} className="main-logo__image" alt="HH-Library" />
                        </a>
                    </div>
                    <div className="separator" />
                    <User />
                    <div className="separator" />
                    <Menu />
                    <footer className="footer">
                        &copy; 2018 HH-Library
                    </footer>
                </div>
                <main className="content">
                    <Route path="/" component={BooksList} />
                </main>
            </div>
        );
    }
}

export default App;
