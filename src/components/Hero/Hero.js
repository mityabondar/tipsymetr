import React from 'react';

import heroImage from './images/hero-image.svg';

function Hero() {

    const texts = {
        title: "Let's calculating a tip using Tipsymetr!",
        description: "Too drunk to calculate how much to tip the waiter? We will help you do it!"
    }

    return (
        <section className="hero bg--base">
            <div className="container hero__container">
                <div className="hero__row">
                    <div className="hero__col hero__texts">
                        <h1 className="hero__title">
                            {texts.title}
                        </h1>
                        <p className="hero__description">
                            {texts.description}
                        </p>
                        <button type="button" className="button button--base">Hold my beer, son!</button>
                    </div>
                    <div className="hero__col hero__image">
                        <img src={heroImage} className="img" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;