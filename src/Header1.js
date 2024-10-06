import "./main.css";
let hd=['How it works','Gifts','About',<img src="./logo.png"/>,'Login','Members','Contracts'];
let a=[]
for (let i=0;i<7;i++) a.push(<li>{hd[i]}</li>)
function Hd () {
    return (
        <div className="header">
            <ul>
                {a}
            </ul>
        </div>
    )
};

export default Hd;