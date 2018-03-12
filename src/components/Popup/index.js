import React, { Component } from 'react';
import classnames from 'classnames';
import './popup.css';


export default function Popup({title, size, onClickByClose, children}) {
    return (
        <div className={classnames('popup', {
            [`popup_size-${size}`]: size,
        })}>
            <span className="popup__close" onClick={onClickByClose}>
                <span className="close">&times;</span>
            </span>
            <div className="popup__title">{title}</div>
            {children}
        </div>
    )
}
