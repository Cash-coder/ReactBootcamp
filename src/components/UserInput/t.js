import {useState} from "react";

function T  () {

    const [counter, setCounter] = useState(1);
    setCounter(prevCounter => prevCounter + 1);
    console.log( 'THIS IS COUNTER: '+ counter);

    return 'a';

}

export default T;