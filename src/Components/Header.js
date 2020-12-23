import React from 'react';
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

const Header = styled.header`
    color:white;
    z-index:10;
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
    font-size:20px;
    font-family: "Dancing Script";
    font-weight:bold;
`;

const List = styled.ul`
    overflow:hidden;
    display:flex;
    width:50%;
    margin-left:25%;
`;

const Item = styled.li`
    width:250px;
    height:75px;
    text-align:center;
`;

const SLink = styled(Link)`
    /* height:20px; */
    display:flex;
    align-items:center;
    justify-content:center;
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
    </Header>
));