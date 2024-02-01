import {useState} from 'react';

export default function LDmode() {
  var [click,updateData] = useState(true);
const lightmode = () => {
  if (click) {
    document.getElementById("body").style.backgroundColor = "black";
    click = false;
  }
  else {
    
    document.getElementById("body").style.backgroundColor = "white";
    console.log(click)
    click = true;
  }
}
  return (
      <div>
          <input type="checkbox" id="toggle"/>
            <label id="switch" for="toggle">
        <div id="circle" onClick={() => lightmode()}></div>
                <div id="text">Light mode</div>
                <div id="text2">Dark mode</div>
            </label>
      </div>
  )
}
