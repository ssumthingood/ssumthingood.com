import React from 'react';
import styled from "styled-components";

const Footer = styled.div`
    width:100%;
    height:50px;
    bottom:0;
    text-align:center;
    line-height:25px;
    color:white;
    background-color:rgba(20,20,20,0.4);
`;

const FooterInner = styled.div`
    width: 1130px;
    height:50px;
    margin:0 auto;
    background-color:rgba(20,20,20,0.6);
    font-size:11px;
`;

export default() =>(
    <Footer>
        <FooterInner>
            <p>2021 ssumthingood.com</p>
            all rights reserved
        </FooterInner>
    </Footer>
);