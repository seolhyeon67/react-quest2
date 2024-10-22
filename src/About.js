
import './about.css';
import Box_all from './box_all.js';
import Footer from './footer.js';
function About () {
    return (
        <div id="about">
            <div className="top">
                <div className="chef_about">
                    <img src="./chef_about.png"/>
                </div>
                <div className="right">
                    <img src="./right1.png"/>
                </div>
                <div className="right">
                    <img src="./right2.png"/>
                </div>
                <div className='top_box'>
                    <p>GLOBAL<br/>BUSINESS</p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididiunt ut labore et dolore magna aliqua
                </div>
            </div>
            <Box_all/>
            <Footer/>
        </div>
    )
}

export default About