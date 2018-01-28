import React, { Component } from 'react';
import './menu.css';


export default function Menu() {
    return(
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item" title="Добавить книгу">
                    <span className="menu__icon menu__icon_add-book" />
                </li>
            </ul>
        </nav>
    )
}
