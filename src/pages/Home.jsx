import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import slyled from 'styled-components'

const TopTitle = slyled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <TopTitle>Produtos Populares</TopTitle>
        <Products />
        <Footer />
    </div>
  )
}

export default Home