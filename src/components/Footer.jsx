import styled from 'styled-components';
import {Phone, Instagram, MailOutline, Room, WhatsApp} from '@material-ui/icons';
import { mobile, mobileGrande } from '../responsive';


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
    ${mobileGrande({ backgroundColor: "#eee" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
    ${mobileGrande({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
    padding: 5px;
    margin-botom: 10px;
    display: flex
    flex-direction: column;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    ${mobile({ display: "none" })}
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>liveStyle.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque amet, odit alias sed totam tenetur eligendi qui? Expedita ipsam quos quis magnam reprehenderit officia maxime, voluptas aliquam! Reiciendis, eos.</Desc>
            <SocialContainer>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <WhatsApp/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Carrinho</ListItem>
                <ListItem>Roupas Masculinas</ListItem>
                <ListItem>Termos</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contato</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}} />Jardim Ipe, Lagoa Santa - MG
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} />(31) 9 8951-7089
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} />luanvictorms@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer