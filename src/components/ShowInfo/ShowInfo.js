import './ShowInfo.css';

const ShowInfo = (props) => {

    if (props.items.length === 0) {
        return <h2 className="no-info details">No Info has been added till now !!!</h2>
    }
    else
        return (
            props.items.map((info) =>
                <div className="details" key={info.id}>
                    <div>
                        <strong>Your name is {info.name} and you are {info.age} years old</strong>
                    </div>
                </div>
            )

        );
}
export default ShowInfo;