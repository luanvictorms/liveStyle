import React from 'react'
import '../components/Navbar.css'
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import styled from 'styled-components';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  box-shadow: inset 0px -1px 2px 0px rgba(0, 0, 0, 0.2);
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  Justify-content: flex-end;
  ${mobile({flex:2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            BR
          </Language>
          <SearchContainer>
            <Input placeholder="Procurar.." type="text" />
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center><Link to="/" style={{textDecoration: "none", color: "black"}}><Logo>liveStyle.</Logo></Link></Center>
        <Right>
          <MenuItem><Link to="/registrar" style={{textDecoration: "none", color: "black"}}>REGISTRAR</Link></MenuItem>
          <MenuItem><Link to="/logar" style={{textDecoration: "none", color: "black"}}>LOGIN</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <Link to="/carrinho" style={{textDecoration: "none", color: "black"}}><ShoppingCartOutlined /></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar