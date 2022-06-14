import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { AddMeButton } from './AddMeButton';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Green New Deal for DC </h1>
            <p>We are a coalition of different organizations supporting to bring the vision of a DC Green New Deal </p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Join Us!
                </Button>
                <AddMeButton
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                   Add Your Name!
                </AddMeButton>
            </div>
        </div>
    );
}

export default HeroSection;