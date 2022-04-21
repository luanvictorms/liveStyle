import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 0 50px 0 50px;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
`;

const Form = styled.form`
        display: flex;
        flex-direction: column;
`;

const Input = styled.input`
        flex: 1;
        min-height: 40%;
        margin: 10px 0;
        padding: 10px;
`;


const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: ${props => 
            props.type === 'back' ? 'black' : "teal"};
        color: white;
        cursor: pointer;
        border-radius: 0 50px 0 50px;
        margin-bottom: 10px;
`;

const Linked = styled.a`
      margin: 5px 0px;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGAR</Title>
            <Form>
                <Input placeholder="Seu username..."/>
                <Input placeholder="Sua senha..."/>
                <Button><Link to="/" style={{textDecoration: "none", color: "white"}}>LOGAR</Link></Button>
                <Button type="back"><Link to="/" style={{textDecoration: "none", color: "white"}}>VOLTAR</Link></Button>
                <Linked>NÃO LEMBRA DA SUA SENHA?</Linked>
                <Linked><Link to="/registrar" style={{textDecoration: "none", color: "black"}}>CRIAR UMA CONTA</Link></Linked>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login