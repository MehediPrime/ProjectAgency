import { useState, useEffect } from "react";
import './css/Slider.css'
import slide1 from '../img/slider/slide1.jpg';
import slide2 from '../img/slider/slide2.jpg';
import slide3 from '../img/slider/slide3.jpg';
import slide4 from '../img/slider/slide4.jpg';
import slide5 from '../img/slider/slide5.jpg';

function Slider() {
    const slideImg = [slide1, slide2, slide3, slide4, slide5];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
                currentSlide<slideImg.length-1 ? setCurrentSlide(currentSlide+1) : setCurrentSlide(0);
            }, 3000);
            return() => clearInterval(interval);
    }, [currentSlide])

    const slideChange = (index) => {
        console.log(index)
        setCurrentSlide(index);
    }

    return (   
        <div className="slider">
            <div className="mainImg">
                <img src={slideImg[currentSlide]} alt="Slide Image" width="800px"/> 
            </div>
            <ul className="slideButtonList">
                {
                    slideImg.map((image, index) =>{
                        return(
                            <li key={index} className={index===currentSlide?"slideButton active":"slideButton"}>
                                <input type="button" onClick={()=> slideChange(index)}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Slider;
