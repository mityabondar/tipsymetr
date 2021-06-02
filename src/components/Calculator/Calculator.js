import React from 'react';

function Calculator() {
    return (
        <section className="calc">
            <div className="container calc__container">
                <h2 className="calc__title title">Tip calculator</h2>

                <form className="calc__form bg--base">
                    <label htmlFor="summ" className="calc__item">
                        <div className="calc__label">Check amount (max 999999)</div>
                        <input type="number" name="summ" id="summ" className="calc__input" min="0" max="999999" placeholder="4600" />
                    </label>
                    <label htmlFor="people" className="calc__item">
                        <div className="calc__label">How many drunk people (max 99)</div>
                        <input type="number" name="people" id="people" className="calc__input" min="1" max="99" placeholder="4" />
                    </label>
                    <label htmlFor="tip" className="calc__item">
                        <div className="calc__label">Tip (%)</div>
                        <input type="number" name="summ" id="summ" className="calc__input" min="5" max="20" step="5" placeholder="10" />
                    </label>
                    <div className="calc__total total">
                        <div className="total__text">Total summ per person:</div>
                        <div className="total__summ">
                            <span>0</span> $
                        </div>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Calculator;