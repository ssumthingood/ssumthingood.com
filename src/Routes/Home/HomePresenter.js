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
    color: whitesmoke;
    background-color:gray;
    &:hover{
        color:gray;
        background-color:whitesmoke;
        transition: color 1s ease;
        transition: background-color 1s ease;
    }
`;

const StudyingIntro = styled.div`
    position:relative;
    height:300px;
    margin:5px 5px;
    padding:10px 10px;
    color:whitesmoke;
    background-color:gray;
    &:hover{
        color:gray;
        background-color:whitesmoke;
        transition: color 1s ease;
        transition: background-color 1s ease;
    }
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
    color:whitesmoke;
    background-color:gray;
    &:hover{
        color:gray;
        background-color:whitesmoke;
        transition: color 1s ease;
        transition: background-color 1s ease;
    }
`;

const LifeIntro = styled.div`
    position:relative;
    height:300px;
    margin:5px 5px;
    padding:10px 10px;
    color:whitesmoke;
    background-color:gray;
    &:hover{
        color:gray;
        background-color:whitesmoke;
        transition: color 1s ease;
        transition: background-color 1s ease;
    }
`;

const Welcome = styled.span`
    font-size:50px;
    display:block;
    margin: 0 auto;
    padding-top:10px;
    padding-bottom:10px;
    text-align:center;
    line-height:60px;
`;

const WhoruTitle = styled.span`
    font-size:24px;
    display:block;
    margin-top:30px;
    margin-left:30px;
`;

const StudyingTitle = styled.span`
    font-size:24px;
    display:block;
    margin-top:80px;
    text-align:right;
    margin-right:30px;
`;

const HobbyTitle = styled.span`
    font-size:24px;
    display:block;
    padding:20px;
    text-align:center;
`;

const LifeTitle = styled.span`
    margin-top:150px;
    font-size:24px;
    display:block;
    padding:20px;
    text-align:center;
`;

const WhoruEx = styled.div`
    position:absolute;
    padding:30px;
    font-size:18px;
    line-height:30px;
    width:360px;
`;

const StudyingEx = styled.div`
    position:absolute;
    padding:30px;
    font-size:18px;
    line-height:30px;
    width:300px;
    text-align:right;
    right:0;
`;

const HobbyEx = styled.div`
    margin:10px auto;
    font-size:18px;
    line-height:30px;
    width:230px;
`;

const LifeEx = styled.div`
    margin:10px auto;
    font-size:18px;
    line-height:30px;
    width:230px;
`;


const SLink = styled(Link)``;

const Home = ()=>(
    <>
    <Helmet>
        <title>썸띵굿닷컴 | Home</title>
    </Helmet>
    <Wrapper>
        {/* <Welcome>어서와요,<br/>화양동 35번지</Welcome> */}
        <SLink to="/whoru"><WhoruIntro>
            <WhoruTitle>Who are you?</WhoruTitle>
            <WhoruEx>
                자신만만하게 자신을 소개한 이 남자, 그런데 너가 누구라고?</WhoruEx>
        </WhoruIntro></SLink>

        <SLink to ="/studying"><StudyingIntro>
            <StudyingTitle>Studying</StudyingTitle>
            <StudyingEx>그는 이것을 끔찍히 싫어하고, 이것 또한 마찬가지입니다.</StudyingEx>
        </StudyingIntro></SLink>

        <Grid>
        <SLink to="/hobbies"><HobbyIntro>
            <HobbyTitle>Hobbies</HobbyTitle>
            <HobbyEx>그 남자의 딱히 은밀하지도, 자랑할 것도 없는 취미생활</HobbyEx>
        </HobbyIntro></SLink>

        <SLink to="/life"><LifeIntro>
            <LifeTitle>Life</LifeTitle>
            <LifeEx>그가 살아가는 이유, 덕질</LifeEx>
        </LifeIntro></SLink>
        </Grid>
    </Wrapper>
    </>
);

export default Home;