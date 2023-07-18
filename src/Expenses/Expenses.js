import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpennsesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import Expenseslist from "./Expenseslist";
import {useState} from "react";


// default export function Expenses(props){
const Expenses = (props) => {

    const [selectedYearFilter, setselectedYearFilter] = useState('2021');

    const selectedYearFilterHandler = selectedYear => {
        setselectedYearFilter(selectedYear);
        console.log('Expenses: \n' + selectedYear + '\n' +props);
    };

    const filteredExpensesByYear = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYearFilter;
    });

    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYearFilter}
                onChangeYearFilterOnExpenses={selectedYearFilterHandler}
            />
            <ExpennsesChart expenses={filteredExpensesByYear} />
            <Expenseslist items={filteredExpensesByYear} />

        </Card>
        </div>
    );
};

export default Expenses;
