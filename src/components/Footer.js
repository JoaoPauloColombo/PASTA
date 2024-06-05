import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/images/logo.png';

const Footerdiv = styled.footer`
  height: 50vh;
  background-color: rgb(8, 156, 201);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    text-align: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 20vh;
  width: 20vh;
  position: relative;
  right: auto;
  left: 15%;

  @media (max-width: 768px) {
    left: 0;
  }
`;

const Contato = styled.div`
  width: 20%;
`;

const Horario = styled.p`
  font-size: 2vh;
  position: relative;
  width: 80%;
  text-align: center;
  margin-left: 7vh;
  position:relative;
  top:28%;
  right:20%;

  @media (max-width: 768px) {
    text-align: center;
    margin-left: 2.9vh;
  }
`;

const Numero = styled.p`
  font-size: 2vh;
  position: relative;
  top:25%;
  right:10%;
  width: 80%;
  display: flex;
  justify-content: center;
  margin-left: 2vh;
  color: white;

`;

const Informacoes = styled.p`
  font-size: 2vh;
  width: 80%;
  display: flex;
  justify-content: center;
  margin-left: 2.5vh;
  position: relative;
  top:25%;
  right:10%;
`;

const Endereco = styled.p`
  font-size: 2vh;
  position: relative;
  top:25%;
  right:10%;
  width: 80%;
  display: flex;
  justify-content: center;
  margin-left: 2.5vh;
  color: white;
`;

const Links = styled.div`
  width: 20%;
  position: relative;
  top: 10%;
`;

const LinksH1 = styled.h1`
  font-size: 3vh;
  color: white;
  text-align: center;
`;

const LinksA = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  text-align: center;
  font-size: 2vh;
  text-decoration: none;
  color: black;

  &:hover {
    color: #405de6;
  }
`;

const Categorias = styled.div`
  width: 20%;
  position: relative;
  top: 10%;
`;

const CategoriasH1 = styled.h1`
  font-size: 3vh;
  color: white;
  text-align: center;
`;

const CategoriasA = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  text-align: center;
  font-size: 2vh;
  text-decoration: none;
  color: black;

  &:hover {
    color: #405de6;
  }
`;

const Verifique = styled.div`
  width: 20%;
  position: relative;
  top: 10%;
`;

const VerifiqueH1 = styled.h1`
  font-size: 3vh;
  color: white;
  text-align: center;
`;

const VerifiqueA = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  text-align: center;
  font-size: 2vh;
  text-decoration: none;
  color: black;

  &:hover {
    color: #405de6;
  }
`;

const Footer = () => {
  return (
    <Footerdiv>
      <Logo src={LogoImage} alt="" />
      <Contato>
        <Horario>Tem dúvidas, estamos disponiveis 24h por dia</Horario>
        <Numero>+11976645574</Numero>
        <Informacoes>Informações de contato</Informacoes>
        <Endereco>São Paulo, São Paulo, Brasil</Endereco>
      </Contato>
      <Links>
        <LinksH1>Links Importantes</LinksH1>
        <LinksA href="#">Acompanhar pedidos</LinksA>
        <LinksA href="#">Minha conta</LinksA>
        <LinksA href="#">Comprar</LinksA>
        <LinksA href="#">Todas as Lojas</LinksA>
      </Links>
      <Categorias>
        <CategoriasH1>Principais Categorias</CategoriasH1>
        <CategoriasA href="#">Cameras, Audio & Video</CategoriasA>
        <CategoriasA href="#">Computadores & Acessórios </CategoriasA>
        <CategoriasA href="#">Mobiles & Tablets</CategoriasA>
        <CategoriasA href="#">Celulares & Video Games</CategoriasA>
      </Categorias>
      <Verifique>
        <VerifiqueH1>Verifique</VerifiqueH1>
        <VerifiqueA href="#">Perguntas Frequentes</VerifiqueA>
        <VerifiqueA href="#">Contate-nos</VerifiqueA>
        <VerifiqueA href="#">Termos e Condiçôes</VerifiqueA>
      </Verifique>
    </Footerdiv>
  );
};

export default Footer;