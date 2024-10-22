import { Link } from "react-router-dom";
import "./main.css";

let hd=['How it works','Gifts',<Link to='/About'>About</Link>,<img src="./logo.png"/>,'Login','Members','Contracts']
let a=[]
for (let i=0;i<7;i++) a.push(<li>{hd[i]}</li>)
function Header () {
    return (
        <div className="header">
            <ul>
                {a}
            </ul>        
        </div>
    )
};

export default Header;