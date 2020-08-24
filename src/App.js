import React from 'react';
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 50px;
  display: grid;
  grid-gap: 100px;

  @media only screen and (max-width: 1500px) {
    max-width: 1140px;  
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
    grid-gap: 40px;
  }

  @media only screen and (max-width: 425px) {
    padding: 0 10px; 
    grid-gap: 10px;
  }
`

function App() {
  return (
    <Container>

    <Header />
    <Content />
    <Footer />

    </Container>
  );
}

export default App;
