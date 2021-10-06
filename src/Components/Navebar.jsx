import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core';

const Container = styled.div`
   
     height: 60px;
`;
const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
    flex: 1;
    
    text-align: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SerchBar = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    margin-left: 25px;
    padding: 8px;

`;
const Input = styled.input`
border: none;
`;
const Logo = styled.h1`
    font-weight: bold;
`;
const MenuItems = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 45px;
`;
const Navebar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SerchBar>
                        <Input />
                        <Search />
                    </SerchBar>
                </Left>
                <Center>
                    <Logo>LAMA.</Logo>
                </Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navebar
