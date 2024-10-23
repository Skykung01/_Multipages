import React, { useState, useEffect } from 'react';
import './calculator.css'; // ใช้ CSS ที่คุณให้มา

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [operator, setOperator] = useState('');

    const updateDisplay = () => {
        return {
            total: currentInput,
            history: previousInput + (operator ? ` ${operator}` : ''),
        };
    };

    const calculate = () => {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(curr)) return;

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }

        setCurrentInput(result.toString());
        setOperator('');
        setPreviousInput('');
    };

    const handleButtonClick = (value) => {
        if (!isNaN(value) || value === '.') {
            if (value === '.' && currentInput.includes('.')) return;
            setCurrentInput(currentInput + value);
        } else if (value === 'AC') {
            setCurrentInput('');
            setPreviousInput('');
            setOperator('');
        } else if (value === '±') {
            if (currentInput) {
                setCurrentInput(currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput);
            }
        } else if (value === '=') {
            calculate();
        } else {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            setOperator(value);
            setPreviousInput(currentInput);
            setCurrentInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            calculate();
        } else if (e.key === 'Backspace' || e.key === 'Escape') {
            e.preventDefault();
            setCurrentInput('');
            setPreviousInput('');
            setOperator('');
        } else if (!isNaN(e.key) || e.key === '.') {
            if (e.key === '.' && currentInput.includes('.')) return;
            setCurrentInput(currentInput + e.key);
        } else if (['+', '-', '*', '/'].includes(e.key)) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            setOperator(e.key);
            setPreviousInput(currentInput);
            setCurrentInput('');
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentInput, previousInput, operator]);

    const { total, history } = updateDisplay();

    return (
        <div id="background">
            <div id="history">
                <span className="history">{history}</span>
            </div>
            <div id="total">
                <span className="total">{total}</span>
            </div>
            <div id="numpad">
                {['+', '7', '8', '9', '-'].map((item, index) => (
                    <button key={index} className="black buttoncal" onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['4', '5', '6', '*'].map((item, index) => (
                    <button key={index + 4} className="black buttoncal" onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['1', '2', '3', '.'].map((item, index) => (
                    <button key={index + 8} className="black buttoncal" onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                <button className="black buttoncal" id="clearAll" onClick={() => handleButtonClick('0')}>0</button>
                
                {[ '=', 'AC'].map((item, index) => (
                    <button key={index + 12} className="specialorange buttoncal" onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;