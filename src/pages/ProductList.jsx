import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "15px" ,width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ width: "75%" })}
`;


const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" ,width: "100%" })}
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Roupas</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Products Filtrados:</FilterText>
                <Select>
                    <Option disabled selected>
                        Cor
                    </Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                    <Option>Amarelo</Option>
                    <Option>Verde</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Tamanho
                    </Option>
                    <Option>P</Option>
                    <Option>M</Option>
                    <Option>G</Option>
                    <Option>GG</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Classificar Produtos:</FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (Crescente)</Option>
                    <Option>Price (Decrescente)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}

export default ProductList