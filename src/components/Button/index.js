import React  from 'react';
import classnames from 'classnames';


export default function Button({kind, type, onClick, children}) {
    return (
        <button className={classnames('btn', {
            [`btn-${kind}`]: kind
        })}
                type={type ? type : 'button'}
                onClick={onClick}>
            {children}
        </button>
    )
}

