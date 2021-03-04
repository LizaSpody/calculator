import './App.css';
import React from 'react';
import './components/display/Display'
import Display from "./components/display/Display";
import Button from "./components/button/Button";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: '0',
            string: '0',
            number: '0'
        };

        this.equally = this.equally.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.numberChange = this.numberChange.bind(this);
        this.remove = this.remove.bind(this);
        this.calculator = this.calculator.bind(this);
        this.clean = this.clean.bind(this);
    }

    equally() {
        this.setState(state => ({
            string: this.state.result,
            result: 0,
        }))
    }

    calculator (str) {
        let sumOrDiff = function (sub, a, sign, b) {
            return sign == "-" ? a - b : +a + +b;
        };
        let multOrDiv = function (sub, a, sign, b) {
            return sign == "*" ? a * b : a / b;
        };
        let matchMultDiv = /(-?[\d\.]+)\s*([\*\/])\s*(-?[\d\.]+)/g;
        let matchSumDiff = /(-?[\d\.]+)\s*([\+-])\s*(-?[\d\.]+)/g;
        let matchProc = /(-?[\d\.]+)\s*([\%])/g;
        let res = this.state.result;
        let get_value = function (exp) {
            while(matchProc.test(exp)){
                let number = (res-parseInt(exp.match(matchProc)[0])) / 100 * parseInt(exp.match(matchProc)[0]);
                exp = exp.replace(matchProc, number);
            }
            while(matchMultDiv.test(exp)){
                exp = exp.replace(matchMultDiv, multOrDiv);
            }
            while(matchSumDiff.test(exp)){
                exp = exp.replace(matchSumDiff, sumOrDiff);
            }
            return exp;
        };
        return get_value(str)
    }

    numberChange(val) {
        let str = this.state.string + val;
        this.state.string === '0' ? (this.setState(state => ({
            string: val,
        }))) : (this.setState(state => ({string: this.state.string + val,
            result: parseFloat(this.calculator (str)),
        })));
    }

    remove() {
        if(this.state.string.substring(0, this.state.string.length-1) === '') {
            this.setState(state => ({
                string: '0',
                result: '0'
            }))
            return true
        }
        this.setState(state => ({
            string: this.state.string.substring(0, this.state.string.length-1),
            result: parseFloat(this.calculator (this.state.string.substring(0, this.state.string.length-1)))
        }));

    }

    clean () {
        this.setState(state => ({
            result: '0',
            string: '0'
        }))
    }

    handleKeyPress(event){
        switch (event.keyCode) {
            case 48:
                this.numberChange(event.key)
                break;
            case 49:
                this.numberChange(event.key)
                break;
            case 50:
                this.numberChange(event.key)
                break;
            case 51:
                this.numberChange(event.key)
                break;
            case 52:
                this.numberChange(event.key)
                break;
            case 53:
                this.numberChange(event.key)
                break;
            case 54:
                this.numberChange(event.key)
                break;
            case 55:
                this.numberChange(event.key)
                break;
            case 56:
                this.numberChange(event.key)
                break;
            case 57:
                this.numberChange(event.key)
                break;
            case 61:
                this.numberChange(event.key)
                break;
            case 173:
                this.numberChange(event.key)
                break;
            case 190:
                this.numberChange(event.key)
                break;
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        return (
            <div  className="calculator-wrap">
                <Display result={this.state.result}
                         string={this.state.string}/>
                <div className='keyboard'>
                    <Button value="AC" handleClick={this.clean} className="btn greyBtn"/>
                    <Button value="⌫" handleClick={this.remove} className="btn"/>
                    <Button value="%" handleClick={this.numberChange} className="btn"/>
                    <Button value="/" handleClick={this.numberChange} className="btn orangeBorderBtn"/>
                    <Button value="7" handleClick={this.numberChange} className="btn"/>
                    <Button value="8" handleClick={this.numberChange} className="btn"/>
                    <Button value="9" handleClick={this.numberChange} className="btn"/>
                    <Button value="*" handleClick={this.numberChange} className="btn orangeBorderBtn"/>
                    <Button value="4" handleClick={this.numberChange} className="btn"/>
                    <Button value="5" handleClick={this.numberChange} className="btn"/>
                    <Button value="6" handleClick={this.numberChange} className="btn"/>
                    <Button value="-" handleClick={this.numberChange} className="btn orangeBorderBtn"/>
                    <Button value="1" handleClick={this.numberChange} className="btn"/>
                    <Button value="2" handleClick={this.numberChange} className="btn"/>
                    <Button value="3" handleClick={this.numberChange} className="btn"/>
                    <Button value="+" handleClick={this.numberChange} className="btn orangeBorderBtn"/>
                    <Button value="." handleClick={this.numberChange} className="btn"/>
                    <Button value="0" handleClick={this.numberChange} className="btn"/>
                    <Button value="=" handleClick={this.equally} className="btn orangeBigBtn"/>
                </div>
            </div>
        );
    }

}

export default App;
