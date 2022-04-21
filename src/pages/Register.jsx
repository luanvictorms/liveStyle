import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
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
        flex-wrap: wrap;
`;

const Input = styled.input`
        flex: 1;
        min-height: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: ${prop => 
            prop.type === 'back' ? 'black' : "teal"};
        color: white;
        cursor: pointer;
        border-radius: 0 50px 0 50px;
        ${mobile({ width: "75%" })}
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CRIE SUA CONTA</Title>
            <Form>
                <Input placeholder="Seu nome..."/>
                <Input placeholder="Seu email..."/>
                <Input placeholder="Seu username..."/>
                <Input placeholder="Sua senha..."/>
                <Input placeholder="Confirme sua senha..."/>
                <Agreement>
                    Ao criar uma conta, eu confirmo os meus dados em acordo com a <b>ACORDO DE PRIVACIDADE</b>
                </Agreement>
                <Button>CRIAR CONTA</Button>
                <Button type="back"><Link to="/" style={{textDecoration: "none", color: "white"}}>VOLTAR</Link></Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register