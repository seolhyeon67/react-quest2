function Iconbox () {
    let icon=[];
    for (let i=1;i<5;i++) icon.push(<p className="icon"><img src={`./icon${i}.png`}/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididiunt ut labore et dolore magna aliqua</p>)
    return (
        <div className="iconbox">
            {icon}
        </div>
    )
}

export default Iconbox;