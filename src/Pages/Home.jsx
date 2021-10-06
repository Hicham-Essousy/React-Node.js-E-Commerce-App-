import React from 'react'
import styled from 'styled-components'
import Annoucement from '../Components/Annoucement'
import Categories from '../Components/Categories'
import Navebar from '../Components/Navebar'
import Nexsletter from '../Components/Nexsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

const Home = () => {
    return (
        <div>
            <Annoucement />
            <Navebar />
            <Slider />
            <Categories />
            <Products />
            <Nexsletter />
        </div>
    )
}

export default Home
