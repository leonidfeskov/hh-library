import React  from 'react';
import './pseudo-link.css'

export default function PseudoLink({onClick, children}) {
    return (
        <span className="pseudo-link"
              onClick={onClick}>
            {children}
        </span>
    )
}

