import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler =  (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsAddingExpense(false);
    };

    const [isAddingExpense, setIsAddingExpense ] = useState(false);

    const startAddingHandler = () => {
        setIsAddingExpense(true);
    }

    const stopAddingHandler = () => {
        setIsAddingExpense(false);
    }

    return (
        <div className='new-expense'>
            {!isAddingExpense && <button onClick={startAddingHandler}>Add New Expense</button>}
            {isAddingExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddingHandler} />}
        </div>
    );
};

export default NewExpense;