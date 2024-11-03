import './nbox.css';

let c=2;
function nbox (props) {
    const a=props.a;
    if (a[0]==0)
        return (
            <div className='nbox1'>
                {a[1]}
            </div>
        )  
    else if (a[0]==1)
        return (
            <topbox>
                <div className='nbox2'>
                    <p>GLOBAL<br/>BUSINESS</p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididiunt ut labore et dolore magna aliqua
                </div>
            </topbox>
    )
    else if (a[0]==2) {
        if (a[1]) {
            c+=1
            return(
                <div className='nbox2'><p>{c}</p></div>
            )}
        return (
            <div className='nbox2'>
                 <boxt>Title</boxt>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididiunt ut labore et dolore magna aliqua
            </div>
        )
    }
}
    
export default nbox;