import React, {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './addUsers.module.css';

function AddUsers( props ) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserAge] = useState('');
    const [error, setError] = useState('');
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length < 2 || enteredUserage.trim().length < 1){
            setError({
                title:"Invalid inputs",
                message:"Enter valid inputs"
            });
            return;
        }
        if(+enteredUserage <1){
            setError({
                title:"Invalid age",
                message:"Enter valid age >1"
            });
            return;
        }
        props.onAddUsers(enteredUsername, enteredUserage);
        setEnteredUsername('');
        setEnteredUserAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const userageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredUserage} onChange={userageChangeHandler}/>
                    <Button type="submit">Add Users</Button>
                </form>
            </Card>
        </div>
        
    )
}

export default AddUsers
