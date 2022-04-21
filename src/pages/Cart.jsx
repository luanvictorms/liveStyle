import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import {Link} from 'react-router-dom';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;


const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;


const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => 
        props.type === 'filled' ? 'black' : "transparent"};
    color: ${props => props.type === 'filled' && 'white'};
    ${mobile({ margin: "10px" })}
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: teal;
    }
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 5px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    transition: all 0.5s ease;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.h1`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'normal' && '500'};
    font-size: ${props => props.type === 'normal' && '24px'};

`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: teal;
    }
`;



const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>SEU CARRINHO</Title>
            <Top>
                <Link to="/listaprodutos" style={{textDecoration: "none"}}><TopButton>CONTINUE COMPRANDO</TopButton></Link>
                <TopTexts>
                    <TopText>Bolsa de Compras(2)</TopText>
                    <TopText>Minha Lista de Desejos (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b> 993</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b> P</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="data:image/jpeg;base64,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"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE JACKET</ProductName>
                                <ProductId><b>ID:</b> 4</ProductId>
                                <ProductColor color="blue"/>
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>TOTAL</SummaryTitle>
                    <SummaryItem type="normal">
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="normal">
                        <SummaryItemText>Valor do frete</SummaryItemText>
                        <SummaryItemPrice>$ 5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="normal">
                        <SummaryItemText>Desconto de frete</SummaryItemText>
                        <SummaryItemPrice>$ -5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Preço Total</SummaryItemText>
                        <SummaryItemPrice>$ 50</SummaryItemPrice>
                    </SummaryItem>
                    <Button>FINALIZAR COMPRA</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart