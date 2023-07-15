import {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";


const ExpenseItemCopy = (props) => {
    const [title, setTitle] = useState('');

    const clickHandler = () => {
        setTitle('Update');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}> Change title </button>
        </Card>
    )
}

export default ExpenseItemCopy;