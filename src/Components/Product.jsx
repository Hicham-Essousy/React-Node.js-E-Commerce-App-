import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 350px;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 240px;
    height: 240px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
`;
const Image = styled.img`
    width: 100%;
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    margin: 7px;
    display: flex;align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;
const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product