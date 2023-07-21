import Button from './Button'
import ButtonClasses from './Button.module.css'
import AddUserClasses from './AddUser.module.css'
import Card from '../Card/Card';
import {useState} from "react";
import ErrorModal from '../ErrorModal/ErrorModal';
import classes from './AddUser.module.css';



function AddUser(props) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    function AddUserHandler(e) {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:'Invalid input',
                message:'Enter a valid name and age',
                });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:'Invalid Age',
                message:'Enter a valid Age',
            })
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    function usernameChangeHandler(event){
        setEnteredUserName(event.target.value);
    }
    function ageChangeHandler(event){
        setEnteredAge(event.target.value);
    }

    function errorHandler(){
        setError(null);
    }


    return (
        <div>
            {error && (<ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label for="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUserName}
                        onChange={usernameChangeHandler}
                    />
                    <label for="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}


export default AddUser;