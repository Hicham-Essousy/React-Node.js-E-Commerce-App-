import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 70px;
`;
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const Info = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    height: 40px;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    padding-left: 20px;
    flex: 8;
    border: none;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #180d09;
    color: white;
    cursor: pointer;
`;


const Nexsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely from your favoritr products.</Desc>
            <Info>
                <Input placeholder="Your email"/>
                <Button>
                    <Send />
                </Button>
            </Info>
        </Container>
    )
}

export default Nexsletter
