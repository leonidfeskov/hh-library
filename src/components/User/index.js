import React, { Component } from 'react';
import PseudoLink from '../PseudoLink';
import './user.css';


export default class User extends Component {
    render() {
        return(
            <div className="user">
                <div className="user__name">Незнакомец</div>
                <PseudoLink>Войти</PseudoLink>
            </div>
        )
    }
}
