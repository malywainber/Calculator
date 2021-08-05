import React from 'react';
import './History-Calculator.css';
const HistoryCalculator = (props) => {
    return (<div class="wrap-history">
        <h2>calculation history</h2>

        <ul>
            {props.calculations.map((calculator, index) => (<li key={index}>
                <div class="calculator-history">{calculator.num1}</div>
                <div class="calculator-history">{calculator.operator}</div>
                <div class="calculator-history">{calculator.num2}</div>
                <div class="calculator-history">=</div>
                <div class="calculator-history">{calculator.sum}</div>
                <div class="calculator-history btn-delet" onClick={e => props.deleteCalculation(calculator)}>delet</div>
                <div class="calculator-history btn-update" onClick={e => props.updateCalculation(calculator)}>update</div>
            </li>))}
        </ul>
    </div>)
}
export default HistoryCalculator;