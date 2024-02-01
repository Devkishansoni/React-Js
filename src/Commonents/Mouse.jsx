function Mouse() {
    const over = () => {
         alert("It's Mouse-Over Event Handler...")
    }
    return (
        <div style={{ backgroundColor: "red",height:"6rem",width: "18rem"}} onMouseOver={over}>

        </div>
    );
}
export default Mouse;