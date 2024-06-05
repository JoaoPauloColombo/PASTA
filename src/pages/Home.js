import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from "../assetsFinal/tropical-leaves.jpg";

const HomeContainer = styled.div`
	background-image: url(${Background});
`;

function Home(){
    return(
        <HomeContainer>
            <Header/>
            <Footer/>
        </HomeContainer>
    );
}

export default Home;