import React from "react";
import Wrapper from "Components/Wrapper";
import Helmet from "react-helmet";
import styled from "styled-components";
import MapApi from "MapApi";

const Main = styled.div`
    padding-top:25px;
    text-align:center;
    font-size:50px;
`;

const Image = styled.div`
    background-image:url(${props=>props.bgUrl});
    margin:30px;
    border : 3px solid gray;
    height:300px;
    width:300px;
    background-size:cover;
    border-radius:150px;
    background-position:center center;
`;

const Grid  = styled.div`
    display:grid;
    margin: 0 auto;
    margin-top:25px;
    grid-template-columns:30% 69%;
    grid-gap:0;
    background-color:lightgray;
    color:whitesmoke;
`;
const Contents = styled.div`
    margin:30px;
    background-color:gray;
`;

const Para = styled.div`
    padding:10px;
    font-size:30px;
    line-height:55px;
`;

const Prime = styled.div`
    text-align:center;
    font-size:25px;
    margin:0 auto;
    padding-top:25px;
    width:500px;
    height:600px;
    background-color:lightgray;
    color:whitesmoke;
`;

const Whoru = ()=>(
    <>
    <Helmet>
        <title>썸띵굿닷컴 | Whoru</title>
    </Helmet>
    <Wrapper>
    <Main>Who are you?</Main>
    <Grid>
    <Image bgUrl="ssumthingoodthumb1.png"/>
    <Contents>
    <Para>NAME : ssumthin'good</Para>
    <Para>AGE : 25</Para>
    <Para>EDUCATION : Konkuk Univ. Department of Software</Para>
    <Para>FAVORITE : Hearthstone</Para>
    </Contents>
    </Grid>
    <Prime>
        Where I At
        <MapApi/>
    </Prime>
    </Wrapper>
    </>
);

export default Whoru;