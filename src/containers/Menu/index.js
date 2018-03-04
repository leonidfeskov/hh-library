import React, { Component } from 'react';
import { connect } from 'react-redux';
import './menu.css';
import { showPopup, POPUP_ADD_BOOK } from '../../reducers/popup';


class Menu extends Component {
    handlerClick = () => {
        this.props.showPopup(POPUP_ADD_BOOK);
    };

    render() {
        return (
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item"
                        title="Добавить книгу"
                        onClick={this.handlerClick}>
                        <span className="menu__icon menu__icon_add-book"/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default connect(
    null,
    {
        showPopup,
    }
)(Menu)
