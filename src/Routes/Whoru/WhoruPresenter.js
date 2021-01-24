import React from "react";
import Wrapper from "Components/Wrapper";
import Helmet from "react-helmet";
import styled from "styled-components";

const Main = styled.div`
    padding-top:20px;
    text-align:center;
    font-size:50px;
`;

const Image = styled.div`
    background-image:url(${props=>props.bgUrl});
    margin:25px;
    border : 3px solid black;
    height:300px;
    width:300px;
    background-size:cover;
    border-radius:150px;
    background-position:center center;
`;

const Whoru = ()=>(
    <>
    <Helmet>
        <title>썸띵굿닷컴 | Whoru</title>
    </Helmet>
    <Wrapper>
    <Main>그래서 네가 누군데?</Main>
    <Image bgUrl="ssumthingoodthumb1.png"/>
    </Wrapper>
    </>
);

export default Whoru;