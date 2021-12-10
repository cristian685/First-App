
import React from"react";
import "./button2.css"

const STYLES=[
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
];

const SIZES=["btn--medium", "btn--large"];

export const Button2 =({
                          children,
                          type,
                          onClick,
                          buttonStyle,
                          buttonSize}) => {

    const checkButton2Style = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButton2Size = SIZES.includes(buttonSize)
    ? buttonSize
        : SIZES[0];

    return (
        <button className={`btn ${checkButton2Style} ${checkButton2Size}`}
                onClick={onClick}
                type={type}>
            {children}
        </button>
    );
}