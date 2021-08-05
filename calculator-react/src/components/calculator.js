import React, { useState, useEffect } from 'react';
import calculatorApi from '../api/calculatorApi';
import baseApi from '../api/baseApi';

import HistoryCalculator from './history-calculator';
import './calculator.css';

const Calculator = () => {
    const [loading, setLoading] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [sum, setSum] = useState(0);
    const [calculations, setCalculations] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [changedId, setChangedId] = useState(undefined);
    const operatotrsList = ['+', '-', '*', '/'];

    useEffect(() => {
        setLoading(true);
        calculatorApi.GetAllCalc().then(response => {
            setLoading(false);
            if (response.data) {
                setCalculations(response.data);
            }
            else { baseApi.handleError("Update Error"); }
        }).catch(err => {
            baseApi.handleError(err);
            setLoading(false);
        })
    }, []);
//add or Update Calculatr
    const calc = () => {
        if (isEdit) {
            calculatorApi.UpdateCalculatr(changedId, { ID: changedId, Num1: num1, Num2: num2, Operator: operator, Sum: sum }).then(response => {
                setLoading(false);
                if (response.data) {
                    setCalculations(response.data);
                    const changedCalc = response.data.find(calc=> calc.id === changedId);
                    setSum(changedCalc.sum);
                }
                else { baseApi.handleError("calc error") };
            }).catch(err => {
                baseApi.handleError(err);
                setLoading(false);
            });
        } else {
            setLoading(true);
            const calc= {
                Num1: num1,
                Operator:operator,
                Num2: num2
            }
            calculatorApi.GetCalc(calc).then(response => {
                setLoading(false);
                if (response.data) {
                    setCalculations(response.data);
                    setSum(response.data[response.data.length - 1].sum);
                }
            }).catch(err => {
                baseApi.handleError(err);
                setLoading(false);
            })
        }
    };

    const updateCalculation = (calculator) => {
        setLoading(true);
        setNum1(calculator.num1);
        setOperator(calculator.operator);
        setNum2(calculator.num2);
        setIsEdit(true);
        setChangedId(calculator.id);

    };

    const deleteCalculation = (calculator) => {
        setLoading(true);
        setChangedId(calculator.id);
        calculatorApi.DeleteCalculatr(calculator.id).then(response => {
            setLoading(false);
            if (response.data) {
                setCalculations(response.data)
            }
            else { baseApi.handleError("Error deleting"); }
        }).catch(err => {
            baseApi.handleError(err);
            setLoading(false);
        })
    };

    return (
        <div className='wrap'>
            {loading && <div className="Loading" >
                <div className="txt-loading" >please wait</div>
            </div>}

            <input className="calc" type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <select className="calc" value={operator} onChange={e => setOperator(e.target.value)}>
                {operatotrsList.map((operator, index) => <option key={index}>{operator}</option>)}
            </select>
            <input className="calc" type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <div className='calc btn' onClick={calc} >=</div >
            <div className="calc res">{sum}</div>
            {/* <app-calculator  [calculation] = "calculation"(calculatrUpdate) = "updateCalculatr($event)"(calculatrDelete) = "deleteCalculatr($event)" ></app - calculator > */}
            <HistoryCalculator calculations={calculations} updateCalculation={updateCalculation} deleteCalculation={deleteCalculation} />
        </div >)
};
export default Calculator;