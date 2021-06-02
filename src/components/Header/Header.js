import React, { useState, useEffect } from 'react';

import Logo from './../Logo';

function Header() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 80);
        });
    }, []);

    const Navigation = () => {
        return (
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__li">
                        <button type="button" className="button button--link">About Service</button>
                    </li>
                    <li className="header__li">
                        <button type="button" className="button button--link">Blog</button>
                    </li>
                </ul>
                <button type="button" className="button button--empty">Let's Calc!</button>
            </nav>
        )
    }

    return (
        <header className={scroll ? "header header--fixed" : "header"}>
            <div className="container header__container">
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}

export default Header;