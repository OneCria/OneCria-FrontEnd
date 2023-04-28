import React, { useState, useEffect } from 'react';
import { Container } from './style';
import { Books } from '../../components/ListOfBooks';
const Index = () =>{
    return(
        <Container>
            <h2>PDFS para Download</h2>
            <div className='cont'>
                <Books/>
            </div>
        </Container>
    )
}
export default Index