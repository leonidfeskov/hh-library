import React  from 'react';
import './logo.css'
import logoImg from './logo.svg';

export default function Logo() {
    return (
        <div className="logo">
            <a href="/">
                <img src={logoImg} className="logo__image" alt="HH-Library" />
            </a>
        </div>
    )
}

