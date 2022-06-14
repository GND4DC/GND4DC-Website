import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from './assets/images/img-9.jpg';
import img2 from './assets/images/img-2.jpg';
import img14 from './assets/images/img-14.jpg';
import img8 from './assets/images/img-8.jpg';



function Cards() {
    return (
        <div className='cards'>
            <h1>Advocacy for a DC Green New Deal</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img9}
                            text='We Canvass to listen to community members and have input'
                            label='Canvassing'
                            path='/AboutUs'
                        />
                        <CardItem
                            src={img2}
                            text='We push for bold climate legislation in the DC Council'
                            label='Legislation'
                            path='/Campaigns'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={img8}
                            text='We make our voices heard when there are community demands'
                            label='Action'
                            path='/Events'
                        />
                        <CardItem
                            src={img14}
                            text='We join together to celebrate in community'
                            label='Community'
                            path='/Events'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default Cards;