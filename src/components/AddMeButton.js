import React from 'react'
import './AddMeButton.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];


export const AddMeButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (  
            <a className='btn-mobile' href="https://docs.google.com/forms/d/e/1FAIpQLSfCZAqZid1MUrUg-f_M4psSSDVxk28GyqHn5JbbMnmOAJ8eeQ/viewform">
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                >
                    {children}
                </button>
            </a>
    );
};