import React from "react";
import './css/Homepage.css'
import vector from '../img/Vector.svg'

const Homepage = () =>{
    return(
        <div className="homepageContainer">
            <div className="heroSection">
                <div className="heroSectionLeft">
                    
                    <h1>Lorem Ipsum is <span style={{color:"#2793F2"}}><img src={vector} alt="img" className="textBackgroundImg"/>simply dummy</span> text of the printing</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been</p>
                    <div className="emailBar">
                        <input type="text" placeholder="Write your email here..."/>
                        <button>Let's talk</button>
                    </div>
                </div>
                <div className="heroSectionRight">
                    Image Slider
                </div>
            </div>
            <div className="statistics">
                <div className="statisticItem">
                    <h1>20+</h1>
                    <p>Completed Project</p>
                    <hr className="lineOne"/>
                    <hr className="lineTwo"/>
                </div>
                <div className="statisticItem">
                    <h1>15+</h1>
                    <p>Satisfied Clients</p>
                    <hr className="lineOne"/>
                    <hr className="lineTwo"/>
                </div>
                <div className="statisticItem">
                    <h1>6+</h1>
                    <p>Years of Experience</p>
                    <hr className="lineOne"/>
                    <hr className="lineTwo"/>                    
                </div>
                <div className="statisticItem">
                    <h1>99%</h1>
                    <p>Client Satisfaction</p>
                </div>
            </div>
            <div style={{height:"300px"}}></div>
        </div>
        
    );
}

export default Homepage;

