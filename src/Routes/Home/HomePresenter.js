import React from "react";
import Wrapper from "Components/Wrapper";
import Helmet from "react-helmet";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

const WhoruIntro = styled.div`
    position:relative;
    height:300px;
    margin:5px 5px;
    padding:10px 10px;
    border:1px dashed black;
`;

const StudyingIntro = styled.div`
    position:relative;
    height:300px;
    margin:5px 5px;
    padding:10px 10px;
    border:1px dashed black;
`;

const Grid  = styled.div`
    display:grid;
    margin: 5px auto;
    grid-template-columns:repeat(auto-fill, 587.5px);
    grid-gap:5px;
`;

const HobbyIntro = styled.div`
    position:relative;
    height:300px;
    margin:5px 5px;
    padding:10px 10px;
    border:1px dashed black;
`;

const LifeIntro = styled.div`
    position:relative;
    height:300px;
    margin:5px 5px;
    padding:10px 10px;
    border:1px dashed black;
`;

const Welcome = styled.span`
    font-size:50px;
    display:block;
    margin: 0 auto;
    padding-top:10px;
    padding-bottom:10px;
    text-align:center;
`;

const SLink = styled(Link)``;

const Home = ()=>(
    <>
    <Helmet>
        <title>썸띵굿닷컴 | Home</title>
    </Helmet>
    <Wrapper>
        <Welcome>Welcome to my place!!</Welcome>
        <SLink to="/whoru"><WhoruIntro>Whoru</WhoruIntro></SLink>
        <SLink to ="/studying"><StudyingIntro>Studying</StudyingIntro></SLink>
        <Grid>
        <SLink to="/hobbies"><HobbyIntro>Hobbies</HobbyIntro></SLink>
        <SLink to="/life"><LifeIntro>Life</LifeIntro></SLink>
        </Grid>
    </Wrapper>
    </>
);

export default Home;