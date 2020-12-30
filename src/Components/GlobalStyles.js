import {createGlobalStyle} from "styled-components"
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        color:black;
        padding-top:75px;
        background-color:rgba(20,20,20,0.1);
    }
`;

export default GlobalStyles;