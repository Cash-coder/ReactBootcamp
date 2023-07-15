import Card from "../UI/Card";
import ExpenseItemCopy from "./ExpenseItemCopy";

const ExpensesCopy = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItemCopy
                title = {props.items[0].title}
                amoount = {props.items[0].amount}
                date = {props.items[0].date}
            />
        </Card>
    )
}

