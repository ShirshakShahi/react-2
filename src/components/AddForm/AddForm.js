import { useState, useRef } from 'react';
import styles from './AddForm.module.css';
import Card from '../UI/Card/Card';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';


const AddForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState(null);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid name and age (non-empty values)."
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please Enter a valid age( > 0)."
            })
            return;
        }

        const myDatas = {
            name: enteredName,
            age: enteredAge
        }

        // props.onAddDatas(texts,age);
        props.onAddDatas(myDatas);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";

    }

    const errorHandler = () => {
        setError(null);
    };
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className="">
                <form onSubmit={onSubmitHandler}>
                    <div >
                        <label className={styles.label} htmlFor="texts">Username</label>
                        <input
                            type="text"
                            id="texts"
                            autoComplete="OFF"
                            ref={nameInputRef}
                        />
                    </div>
                    <div>
                        <label className={styles.label} htmlFor="age">Age (Years)</label>
                        <input
                            type="number"
                            id="age"
                            ref={ageInputRef}
                        />
                    </div>
                    <Button type="submit">Add Age</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddForm;