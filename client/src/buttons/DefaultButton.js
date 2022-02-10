import React from 'react';

const DefaultButton = (props) => {
    return (
        <button
            className="dflt-btn"
            type={props.type ? props.type : null}
            onClick={() => props.onClick}
        >
            {props.label}
        </button>
    );
};

export default DefaultButton;