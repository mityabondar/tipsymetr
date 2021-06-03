import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.inputSumm = React.createRef();
        this.inputPeople = React.createRef();
        this.inputTip = React.createRef();

        this.state = {
            tipsWithoutSumm: 0,
            totalSummWithTips: 0,
            totalSummPerPerson: 0
        };

        this.updateTotalSumm = this.updateTotalSumm.bind(this);
    }

    updateTotalSumm() {
        const summValue = this.fromStringToInt(this.inputSumm.current.value);
        const peopleValue = this.fromStringToInt(this.inputPeople.current.value) || 1;
        const tipValue = this.fromStringToInt(this.inputTip.current.value) / 100;

        let totalTip = summValue * tipValue;
        let totalSumm = summValue + totalTip;
        let totalCheck = totalSumm / peopleValue;

        let summPerPerson = this.cutZeros(totalCheck, 2);
        let summTips = this.cutZeros(totalTip, 2);
        let summWithTips = this.cutZeros(totalSumm, 2);

        this.setState(() => {
            return {
                tipsWithoutSumm: summTips,
                totalSummWithTips: summWithTips,
                totalSummPerPerson: summPerPerson
            }
        });
    }

    cutZeros(value, count) {
        return Number.isInteger(value) ? value : value.toFixed(count);
    }

    fromStringToInt(value) {
        const outputValue = value !== '' ? parseInt(value, 10) : 0;
        return outputValue;
    }

    componentDidMount() {
        this.updateTotalSumm()
    }

    render() {
        return (
            <section className="calc">
                <div className="container calc__container">
                    <h2 className="calc__title title">Tip calculator</h2>
    
                    <form className="calc__form bg--base">
                        <label htmlFor="summ" className="calc__item">
                            <div className="calc__label">Check amount (max 999999)</div>
                            <input type="number" name="summ" id="summ" className="calc__input" 
                                min="0" 
                                max="999999" 
                                placeholder="0"
                                defaultValue="0"
                                ref={this.inputSumm}
                                onInput={this.updateTotalSumm}
                            />
                        </label>
                        <label htmlFor="people" className="calc__item">
                            <div className="calc__label">How many drunk people (max 99)</div>
                            <input type="number" name="people" id="people" className="calc__input" 
                                min="1" 
                                max="99"
                                placeholder="1"
                                defaultValue="1"
                                ref={this.inputPeople}
                                onInput={this.updateTotalSumm}
                            />
                        </label>
                        <label htmlFor="tip" className="calc__item">
                            <div className="calc__label">Tip (%)</div>
                            <input type="number" name="summ" id="summ" className="calc__input" 
                                min="5" 
                                max="20" 
                                step="5" 
                                placeholder="5" 
                                defaultValue="5"
                                ref={this.inputTip}
                                onInput={this.updateTotalSumm}
                            />
                        </label>
                        <div className="calc__total total">
                            <div className="total__text">Total summ per person:</div>
                            <div className="total__summ">
                                <span>{this.state.totalSummPerPerson}</span>$
                            </div>
                            <div className="total__text">Total summ with tip:</div>
                            <div className="total__summ">
                                <span>{this.state.totalSummWithTips}</span>$
                            </div>
                            <div className="total__text">Total tip's summ:</div>
                            <div className="total__summ">
                                <span>{this.state.tipsWithoutSumm}</span>$
                            </div>
                        </div>
                    </form>
    
                </div>
            </section>
        )
    }
}

export default Calculator;