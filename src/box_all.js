function Box_all () {   
    let box=[];
    for (let i=1;i<7;i++) box.push(i>2?<p className="box">{`${i}`}</p>:<p className="box"><t>Title</t>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididiunt ut labore et dolore magna aliqua</p>);
        return (
        <div className="box_all">
            <p className="box6">{box}</p>
            <p className="box7">7</p>
        </div>
    )
}
export default Box_all;