import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import {useState} from "react";


// default export function Expenses(props){
const Expenses = (props) => {

    const [selectedYearFilter, setselectedYearFilter] = useState('2022');

    const selectedYearFilterHandler = selectedYear => {
        setselectedYearFilter(selectedYear);
        console.log('Expenses: \n' + selectedYear + '\n' +props);
    };

    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYearFilter}
                onChangeYearFilterOnExpenses={selectedYearFilterHandler}
            />
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
            ))}

        </Card>
        </div>
    );
};

export default Expenses;
