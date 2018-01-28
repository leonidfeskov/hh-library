import React, { Component } from 'react';
import './button.css';


export default function Book({children}) {
    return <button type="button" className="button">{children}</button>
}

