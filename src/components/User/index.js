import React, { Component } from 'react';
import './user.css';


export default class User extends Component {
    render() {
        return(
            <div className="user">
                <div className="user__name">Незнакомец</div>
                <span className="pseudo-link">Войти</span>
            </div>
        )
    }
}
