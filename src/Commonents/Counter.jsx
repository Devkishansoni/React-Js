import React,{useState} from "react";

export default function Counter() {
    let [data, setData] = useState(0);
    function Increase(){
        setData(data + 1);
    };
    const Decrease=()=>{
        setData(data - 1);
    }
    return (
        <div>
            <h1 id="count">{data}</h1>
            <button onClick={Decrease}>Decrease counter</button>
            <button onClick={Increase}>Increase counter</button>
        </div>
    );
}