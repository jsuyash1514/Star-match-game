import React from "react";
import './Button.css';

export const Button = (props) => {
    let textColor;
    if (props.buttonBgColor === '#E7E7E7') textColor = '#000';
    else textColor = '#FFF';
    return(
        <button className="digit-container" 
                style={{backgroundColor: props.buttonBgColor, color: textColor}}
                onClick={
                    () => {props.onButtonClick(props.digit)}
                }>
            {props.digit}
        </button>
    );
}