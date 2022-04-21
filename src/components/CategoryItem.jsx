import styled from 'styled-components';
import { mobile, mobileGrande } from '../responsive';
import { Link } from 'react-router-dom';

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    ${mobile({height: "30vh"})}
    ${mobileGrande({height: "20vh"})}
`;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    cursor: pointer;

    &:hover ${Image}{
        border-radius: 0 50% 0 50%;
    }
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0 50% 0 50%;
    transition: all 0.5s ease;

    &:hover{
        background-color: black;
        color: white;
    }
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button><Link to="/listaprodutos" style={{textDecoration: "none", color: "teal"}} >COMPRAR</Link></Button>
        </Info>
    </Container>
  )
}

export default CategoryItem