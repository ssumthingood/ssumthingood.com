import React from 'react';
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

const Header = styled.header`
    color:white;
    z-index:2;
    width:100%;
    height:75px;
    line-height:75px;
    position:fixed;
    top:0;
    left:0;
    align-items:center;
    background-color:rgba(20,20,20,0.8);
`;

const Title = styled.span`
    display:block;
    font-size:20px;
    font-family: "Dancing Script";
    font-weight:bold;
`;

const List = styled.ul`
    display:flex;
    width:800px;
    margin: auto auto;
`;

const Item = styled.li`
    width:200px; 
    height:75px;
    text-align:center;
    border-bottom : 5px solid ${props => props.current ? "#808080" : "transparent"};
    transition : border-bottom .5s ease;
    font-size:14px;
    &:hover{
        color:black;
        background-color:white;
        transition: color .5s ease;
        transition: background-color .5s ease;
    }
`;

const SLink = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const LogoList = styled.ul`
    width:150px;
    margin:-50px auto;
    margin-top:-50px;
    padding-left:1050px;
    color:black;
    display:flex;
`;

const LogoItem = styled.li`
    display:block;
    &:not(last-child){padding-right:30px;};
`;

const LogoImage = styled.a`
    display:block;
    background-image:url(${props=>props.logoUrl});
    height:30px;
    width:30px;
    background-size:cover;
    background-position:center center;
    background-color:gray;
    &:hover{
        border:3px solid white;
    }
`;

export default withRouter(({location:{pathname}})=>(
    <Header>
        <List>
            <Item current ={pathname ==="/whoru"}>
                    <SLink to="/whoru">WHORU</SLink>
            </Item>
            <Item current ={pathname ==="/studying"}>
                    <SLink to="/studying">STUDY</SLink>
            </Item>
            <Item current ={pathname ==="/"}>
                    <SLink to="/"><Title>썸띵굿닷컴</Title></SLink>
            </Item>
            <Item current ={pathname ==="/hobbies"}>
                    <SLink to="/hobbies">HOBBY</SLink>
            </Item>
            <Item current ={pathname ==="/life"}>
                    <SLink to="/life">LIFE</SLink>
            </Item>
        </List>

        <LogoList>
            <LogoItem>
            <LogoImage href="https://www.instagram.com/ssumthin_good" target="_blank" logoUrl = "Winstagram.png"/>
            </LogoItem>
            <LogoItem>
            <LogoImage href="https://www.facebook.com/profile.php?id=100012876137307" target="_blank" logoUrl = "Wfacebook.png"/>
            </LogoItem>
            <LogoItem>
            <LogoImage href ="https://www.youtube.com/channel/UCo5uwq8Ncni3fPYSf7RU-2w" target="_blank" logoUrl = "Wyoutube.png"/>
            </LogoItem>
        </LogoList>
    </Header>
));