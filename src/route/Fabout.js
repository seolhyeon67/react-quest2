
import './about.css';
import Footer from './footer.js';
import Nbox from './nbox.js';

function About () {
    const nbox=[[0,<img src='right1.png'/>],[0,<img src='right2.png'/>],[1],[2,0],[2,1]]
    return (
        <div id="about">
            <div className="top">
                <div className="chef_about">
                    <img src="./chef_about.png"/>
                </div>
                <Nbox a= {nbox[0]}/>
                <Nbox a= {nbox[1]}/>
                <Nbox a= {nbox[2]}/>
            </div>
            <div className='box_all'>
                <p className='box6'>
                    <Nbox a= {nbox[3]}/>
                    <Nbox a= {nbox[3]}/>
                    <Nbox a= {nbox[4]}/>
                    <Nbox a= {nbox[4]}/>
                    <Nbox a= {nbox[4]}/>
                    <Nbox a= {nbox[4]}/>
                </p>
                <p className='box7'>7</p>
            </div>
            <Footer/>
        </div>
    )
}


export default About;