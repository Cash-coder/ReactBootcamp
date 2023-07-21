import AddUser from './modules/AddUser/AddUser';
import UserList from './modules/UserList/UserList';
import {useState} from "react";


export default function App()  {
    const [usersList, setUsersList] = useState([]);

    function addUserHandler(uName, uAge) {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {name: uName, age:uAge, id:Math.random().toString()},
            ];
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </div>
    );
};

