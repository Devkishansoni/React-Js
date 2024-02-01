function Onclick() {
    const sall = 60000;
    const bonus = 5000;
    const total = sall + bonus;
    const sallary = () => {
        alert(total);
    };
    return (
        <div>
            <h1>Bottom Box for Sallary Amount...</h1>
            <button onClick={sallary}>Click to check our sallary..</button>
        </div>
    );
};
export default Onclick;