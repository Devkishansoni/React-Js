const Keypress = () => {
    const keydown = () => {
        let x = document.getElementById("key");
        x.style.backgroundColor  = "green";
    }
    const keyup = () => {
        let x = document.getElementById("key");
        x.style.backgroundColor  = "skyblue";
    }
    return (
        <div>
            <h1>Input Box for Users..</h1>
            <input type="text" id="key" onKeyDown={keydown} onKeyUp={keyup}/>
        </div>
    );
};
export default Keypress;