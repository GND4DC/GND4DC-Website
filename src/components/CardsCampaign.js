import React from 'react'
import CardCampaign from './CardCampaign';
import img10 from './assets/images/img-10.jpg';
import img1 from './assets/images/img-1.jpg';
import img6 from './assets/images/img-6.jpg';
import img3 from './assets/images/img-3.jpg';
import img11 from './assets/images/img-11.jpg';

function CardsCampaign() {
    return (
        <div className='cards'>
            <h1>The vision of a DC Green New Deal</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardCampaign
                            src={img10}
                            text='It is critical that lead pipes are removed to have better sustainable buildings'
                            label='Green New Deal for Lead pipe removal'
                            path='/'
                        />
                        <CardCampaign
                            src={img1}
                            text='We believe housing is a human right through net zero social housing'
                            label='Green New Deal for Housing'
                            path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardCampaign
                            src={img6}
                            text='Sustainable transit is the way of the future'
                            label='Metro For DC'
                            path='/'
                        />
                        <CardCampaign
                            src={img11}
                            text='Sustainable buildings is the way of the future'
                            label='Green Goverment Building act'
                            path='/'
                        />
                        <CardCampaign
                            src={img3}
                            text='It is critical that we meet our emissions goals to presserve our future'
                            label='Climate Commitment act'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsCampaign;