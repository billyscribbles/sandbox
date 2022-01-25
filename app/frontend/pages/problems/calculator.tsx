import React, { useState, useEffect } from 'react';
import styles from './calculator.module.css';

/* Planning

    1. Create a UI 

    2. Complete the UX
       
        - Needs a variable to hold display string such as (1 + 4 - 17 + 3)
        - Need a variable to hold previous operand and a current operand
        - Need to validate input that it must go number first then operator then number and so on
        - Need to support decimal
        - Need to be able to clear
        - Evaluate total only when equal is clicked
        - No parentheses so, order of operations does not matter
        - Need a clear all button

    3. Create unit test cases

    Assumptions:
        - No negative numbers

*/

export default function calculator(): JSX.Element {
    const numberPadValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const [previousOperand, setPreviousOperand] = useState('');
    const [currentOperand, setCurrentOperand] = useState('');
    const [equationToDisplay, setEquationToDisplay] = useState('');
    const [operator, setOperator] = useState('');

    useEffect(() => {
        console.clear();
        console.log('previousOperand', previousOperand);
        console.log('currentOperand', currentOperand);
        console.log('equationToDisplay', equationToDisplay);
        console.log('operator', operator);
    }, [previousOperand, currentOperand, equationToDisplay, operator]);

    const handleClearBtn = function() {
        setCurrentOperand('');
        setPreviousOperand('');
        setEquationToDisplay('');
    };

    const handleNumberPadBtn = function(e: React.SyntheticEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            value: string;
        };

        const numberValue = target.value.toString();

        setEquationToDisplay(equationToDisplay + numberValue);

        setCurrentOperand(currentOperand.toString() + numberValue);
    };

    const calculate = function() {
        let total;
        if (operator === '+') {
            total = parseFloat(previousOperand) + parseFloat(currentOperand);
        } else {
            total = parseFloat(previousOperand) - parseFloat(currentOperand);
        }

        setPreviousOperand(total.toString());
        setCurrentOperand('');
        return total;
    };

    const handleOperationBtn = function(e: React.SyntheticEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            value: string;
        };

        const operation = target.value;
        if (currentOperand === '') return;

        setEquationToDisplay(equationToDisplay + ` ${operation} `);
        setOperator(operation);

        if (previousOperand === '') {
            setPreviousOperand(currentOperand);
            setCurrentOperand('');
            return;
        }

        calculate();
    };

    const handleEqualsBtn = function() {
        if (previousOperand === '') return;
        const total = calculate();
        setEquationToDisplay(total.toString());

        setCurrentOperand(total.toString());
        setPreviousOperand('');
    };

    return (
        <div className={styles.background}>
            <h1>My Calculator</h1>
            <div className={styles.calculatorGrid}>
                <div className={styles.output}>{equationToDisplay}</div>
                <br />
                {numberPadValues.map((numberPadValue, i) => {
                    return (
                        <button key={i} onClick={handleNumberPadBtn} value={numberPadValue}>
                            {numberPadValue}
                        </button>
                    );
                })}
                <br /> <br />
                <button onClick={handleClearBtn}>CLEAR</button>
                <button onClick={handleOperationBtn} value={'+'}>
                    +
                </button>
                <button onClick={handleOperationBtn} value={'-'}>
                    -
                </button>
                <button onClick={handleEqualsBtn}>=</button>
            </div>
        </div>
    );
}
