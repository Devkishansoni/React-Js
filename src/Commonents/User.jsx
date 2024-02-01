import Keypress from "./Keypress";
import Mouse from "./Mouse";
import Onclick from "./Onclick";
import Props from "./Props";

function User() {
    let employee = {
        name: "Kishan Soni.",
        add: "khutehi.",
        city:"Rewa (M.P.).",
        company: "Pro Skill Hub.",
        contact: 8103367549.
    }
    return (
        <div style={{ textAlign: "left"}}>
            <h1>List of Employee</h1>
            <ul>
                <li>Ravineesh</li>
                <li>Poonam</li>
                <li>Aman</li>
                <li>Ankit</li>
            </ul>
            <Props data={employee} />
            <Keypress />
            <Onclick />
            <br/>
            <Mouse/>
        </div>
    );
};
export default User;