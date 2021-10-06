import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import Categorie from './Categorie';
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`;
const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <Categorie item={item} />
            ))}
        </Container>
    )
}

export default Categories
