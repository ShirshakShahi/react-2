import { useState } from 'react';
import styles from './AddForm.module.css';
import Card from '../UI/Card/Card';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';


const AddForm = (props) => {

    const [texts, setTexts] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);



    const onNameHandler = (event) => {
        setTexts(event.target.value);
    }

    const onAgeHandler = (event) => {
        setAge(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (texts.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a valid name and age (non-empty values)."
            })
        }
        if (+age < 1) {
            setError({
                title: "Invalid Age",
                message: "Please Enter a valid age( > 0)."
            })
            return;
        }

        const myDatas = {
            name: texts,
            age: age
        }

        // props.onAddDatas(texts,age);
        props.onAddDatas(myDatas);
        setTexts('');
        setAge('');


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
                        <input type="text" id="texts" value={texts} autoComplete="OFF" onChange={onNameHandler} />
                    </div>
                    <div>
                        <label className={styles.label} htmlFor="age">Age (Years)</label>
                        <input type="number" id="age" value={age} onChange={onAgeHandler} />
                    </div>
                    <Button type="submit">Add Age</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddForm;