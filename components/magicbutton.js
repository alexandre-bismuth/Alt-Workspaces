import React from 'react';

export default function MagicButton({ gradientColor, textColor, text }) {
    const buttonStyle = {
        background: gradientColor,
        color: textColor,
        borderRadius: '4rem',
    };

    return (
        <div className="button_container">
            <a href="https://calendly.com/your-link" className="button" style={buttonStyle}>
                <div className="button__content">
                    <span className="button__text font-ClashMedium text-center" style={{ color: textColor }}>{text}</span>

                    <div className="button__reflection-1"></div>
                    <div className="button__reflection-2"></div>
                </div>

                <img src='/button-animation/star.png' alt="" className="button__star-1" />
                <img src='/button-animation/star.png' alt="" className="button__star-2" />
                <img src='/button-animation/circle.png' alt="" className="button__circle-1" />
                <img src='/button-animation/circle.png' alt="" className="button__circle-2" />
                <img src='/button-animation/diamond.png' alt="" className="button__diamond" />
                <img src='/button-animation/triangle.png' alt="" className="button__triangle" />

                <div className="button__shadow" style={{ background: gradientColor }}></div>
            </a>
        </div>
    );
}