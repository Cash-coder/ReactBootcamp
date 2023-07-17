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

    const filteredExpensesByYear = props.items.filter(expenese => {
        return expenese.date.getFullYear().toString() === selectedYearFilter;
    })

    let expensesContent = <p> No Expenses found in that year</p>;

    if (filteredExpensesByYear.length > 0) {
        expensesContent =   filteredExpensesByYear.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )
        )
    }

    return(
        <div>
        <Card className="expenses">

            <ExpensesFilter
                selected={selectedYearFilter}
                onChangeYearFilterOnExpenses={selectedYearFilterHandler}
            />

            {expensesContent}

        </Card>
        </div>
    );
};

export default Expenses;
