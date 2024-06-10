import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/images/logo.png';

const Footerdiv = styled.footer`
  font-family: "Poppins", sans-serif;
  height: 50vh;
  background-color: rgb(8, 156, 201);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 25vh;
  width: 25vh;
`;

const Contato = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Horario = styled.p`
  font-size: 2vh;
  text-align: center;
  margin-bottom: 10px;
`;

const Numero = styled.p`
  font-size: 2vh;
  text-align: center;
  margin-bottom: 10px;
  color:white;
`;

const Informacoes = styled.p`
  font-size: 2vh;
  text-align: center;
  margin-bottom: 10px;
`;

const Endereco = styled.p`
  font-size: 2vh;
  text-align: center;
  margin-bottom: 10px;
  color:white;
`;

const Links = styled.div`
  width: 20%;
  margin: 0 20px;
`;

const LinksH1 = styled.h1`
  font-size: 3.5vh;
  color: white;
  text-align: center;
`;

const LinksA = styled.a`
  display: block;
  text-align: center;
  font-size: 2.5vh;
  text-decoration: none;
  color: black;

  &:hover {
    color: #405de6;
  }
`;

const Categorias = styled.div`
  width: 20%;
  margin: 0 20px;
`;

const CategoriasH1 = styled.h1`
  font-size: 3.5vh;
  color: white;
  text-align: center;
`;

const CategoriasA = styled.a`
  display: block;
  text-align: center;
  font-size: 2.5vh;
  text-decoration: none;
  color: black;

  &:hover {
    color: #405de6;
  }
`;

const Verifique = styled.div`
  width: 20%;
  margin: 0 20px;
`;

const VerifiqueH1 = styled.h1`
  font-size: 3.5vh;
  color: white;
  text-align: center;
`;

const VerifiqueA = styled.a`
  display: block;
  text-align: center;
  font-size: 2.5vh;
  text-decoration: none;
  color: black;

  &:hover {
    color: #405de6;
  }
`;

const Footer = () => {
  return (
    <Footerdiv>
      <Contato>
      <Logo src={LogoImage} alt="" />
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