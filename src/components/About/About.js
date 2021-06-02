import React from 'react';

import image from './images/image-about.svg';

function About() {
    return (
        <section className="about bg--base">
            <div className="container about__container">
                <div className="about__row">
                    <div className="about__col">
                        <img src={image} className="img about__image" alt="" />
                    </div>
                    <div className="about__col">
                        <div className="title title--decoration">About Service</div>
                        <h2 className="about__title">
                            Tipsymetr is a little comic tips calculator for a large & boozy company!
                        </h2>
                        <p className="about__description">
                            I thought about the text in this place for a very long time, but unfortunately I did not come up with anything. Therefore, I just wish you health and a morning without a hangover! In the section "Mini blog" I have prepared some articles for you about alcoholism.
                        </p>
                        <ul className="about__list">
                            <li className="about__item">
                                The application is made on React.js and pure CSS
                            </li>
                            <li className="about__item">
                                Designed as a joke example
                            </li>
                            <li className="about__item">
                                Hope the calculator is helpful
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;