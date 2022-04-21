import '../components/Slider.css'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import  styled  from 'styled-components';
import { useState } from 'react';
import { sliderItems } from "../data";
import { mobile, mobileGrande } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
    ${mobileGrande({display: "none"})}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f8eaea;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    transition: .2s;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
`;

const Image = styled.img`
    height: 80%;
    border-radius: 0 50% 0 50%;
    transition: .8s;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };

  return (
    <Container>
        <Arrow className='arrow-left' direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex} className="wrapper">
        {sliderItems.map(item => (
            <Slide bg={item.bg} key={item.id} className="slide">
                <div className="img-container">
                    <Image src={item.img} alt="model"/>
                </div>
                <div className="info-container">
                    <h1 className="title">{item.title}</h1>
                    <p className="desc">{item.desc}</p>
                    <button className="button"><Link to="/listaprodutos" style={{textDecoration: "none", color: "black"}} >COMPRAR AGORA</Link></button>
                </div>
            </Slide>
        ))}
        </Wrapper>
        <Arrow className='arrow-right' direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider