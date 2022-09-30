import React, { useEffect, useState} from "react";
import './css/Homepage.css'
import vector from '../img/Vector.svg';
import Slider from "./Slider";
import bgOne from '../img/bgOne.svg';
import iconOne from '../img/IconOne.svg';
import arrowIcon from '../img/arrow-right-circle-fill.svg';

const Homepage = () =>{

    const[revealStatus, setRevealStatus] = useState(false);
    const RevealComponentOnScroll = () =>{
        const reveal = document.getElementsByClassName("processCards");
        for (let index = 0; index < reveal.length; index++) {
            const innerHeight = window.innerHeight;
            const elementTop = reveal[index].getBoundingClientRect().top;
            console.log(elementTop + " " +innerHeight);
            elementTop < innerHeight-100 ?  setRevealStatus(true) : setRevealStatus(false);
        }
    }
    
    window.addEventListener("scroll", RevealComponentOnScroll);


    let valueDisplay = document.getElementsByClassName("numCount");
    let interval = 700;
    
    useEffect(()=>{
        if(valueDisplay){
            for (const value of valueDisplay) {
                let startTime = 0;
                let endTime = parseInt(value.getAttribute("data-val"));
                let duration = Math.floor(interval/endTime);

                let counter = setInterval(() => {
                    startTime +=1;
                    value.textContent = startTime;
                    if (startTime === endTime) {
                        clearInterval(counter);
                    }
                }, duration);
            }
        }
    },[valueDisplay])

    
    return(
        <div className="homepageContainer">
            <div className="bgStyleOne"><img src={bgOne} alt="" /></div>
            <div className="bgStyleTwo"></div>

            <div className="heroSection">
                <div className='heroSectionLeft' >
                    <h1 className="animationLR">Lorem Ipsum is <span style={{color:"#2793F2"}}><img src={vector} alt="img" className="textBackgroundImg"/>simply dummy</span> text of the printing</h1>
                    <p className="animationLR">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been</p>
                    <div className="emailBar">
                        <input type="text" placeholder="Write your email here..."/>
                        <button>Let's talk</button>
                    </div>
                </div>
                <div className="heroSectionRight">
                    <Slider/>
                </div>
            </div>

            <div className="statisticsSection">
                <div className="statisticItem">
                    <h1><span className="numCount" data-val="30">0</span>+</h1>
                    <p>Completed Project</p>
                    <hr className="lineOne"/>
                    <hr className="lineTwo"/>
                </div>
                <div className="statisticItem">
                    <h1><span className="numCount" data-val="20">0</span>+</h1>
                    <p>Satisfied Clients</p>
                    <hr className="lineOne"/>
                    <hr className="lineTwo"/>
                </div>
                <div className="statisticItem">
                <h1><span className="numCount" data-val="6">0</span>+</h1>
                    <p>Years of Experience</p>
                    <hr className="lineOne"/>
                    <hr className="lineTwo"/>                    
                </div>
                <div className="statisticItem">
                <h1><span className="numCount" data-val="99">0</span>%</h1>
                    <p>Client Satisfaction</p>
                </div>
            </div>

            <div className="processSection">
                <h1>Process We Follow</h1>
                <div className={ revealStatus ? "processCards animationAppear" : "processCards"}>
                    <div className="processCard">
                        <img src={iconOne} alt="icon"/>
                        <h1>Market Research</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    </div>
                    <div className="processCard">
                        <img src={iconOne} alt="icon"/>
                        <h1>Brainstorming & Planning</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    </div>
                    <div className="processCard">
                        <img src={iconOne} alt="icon"/>
                        <h1>Design & Prototype</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    </div>
                    <div className="processCard">
                        <img src={iconOne} alt="icon"/>
                        <h1>Implementation</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    </div>
                    <div className="processCard">
                        <img src={iconOne} alt="icon"/>
                        <h1>Testing & Deployment</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                    </div>
                    <div className="processCard last">
                        <h1>We help you add value to your product</h1>
                        <p>Add value to your product to reach out billions of customers.</p>
                        <button>
                            Let’s Talk <img src={arrowIcon} alt="->" width="28.33px"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="serviceSection">
                <h1>Our Services</h1>
            </div>
        </div>
        
    );
}

export default Homepage;

