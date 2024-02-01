const Props = (prop) => {
    return (
        <div>
            <p>Name of Employee :- {prop.data.name}</p>
            <p>Add of Employee :- {prop.data.add}</p>
            <p>City of Employee{prop.data.city}</p>
            <p>Company of Employee :- {prop.data.company}</p>
            <p>Contact of Employee :- {prop.data.contact}</p>
        </div>
    );
};
export default Props;