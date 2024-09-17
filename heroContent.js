import Content1 from '../download.png'
import Content2 from '../download2.jpg'
import Content3 from '../download3.jpg'



const HeroContent1 = () => {
    return (
        <>
            <a>
                I am Text for Slider 1
            </a>

            <img className="heroContentImg" src={Content1} alt="Content1"/>
        </>
    )
}

const HeroContent2 = () => {
    return (
        <>
        <a>
            I am Text for Slider 2
        </a>
        <img className="heroContentImg" src={Content2} alt="Content2" />
    </>
    )
}

const HeroContent3 = () => {
    return (
        <>
        <a>
            I am Text for Slider 3
        </a>
        <img className="heroContentImg" src={Content3} alt="Content3"/>
    </>
    )
}


function SwipeCard() {



}







   

export { HeroContent1, HeroContent2, HeroContent3 }
