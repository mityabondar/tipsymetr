import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import imageArticle from './images/image.jpg';

function Blog() {
    return (
        <section className="blog bg--base">
            <div className="container blog__container">
                <h2 className="title title--decoration">
                    Mini Blog
                </h2>
                <ul className="articles">
                    <li className="articles__item">
                        <article className="article">
                            <img src={imageArticle} className="img article__image" alt="" />
                            <h3 className="article__title">
                                The best ways to hangover
                            </h3>
                            <p className="article__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.
                            </p>
                            <a href="/" className="link link--button">
                                Read more...
                            </a>
                        </article>
                    </li>
                    <li className="articles__item">
                        <article className="article">
                            <img src={imageArticle} className="img article__image" alt="" />
                            <h3 className="article__title">
                                The best ways to hangover
                            </h3>
                            <p className="article__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.
                            </p>
                            <a href="/" className="link link--button">
                                Read more...
                            </a>
                        </article>
                    </li>
                    <li className="articles__item">
                        <article className="article">
                            <img src={imageArticle} className="img article__image" alt="" />
                            <h3 className="article__title">
                                The best ways to hangover
                            </h3>
                            <p className="article__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.
                            </p>
                            <a href="/" className="link link--button">
                                Read more...
                            </a>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Blog;