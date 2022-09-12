import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --color-navbar-beige:#F5F3EE;
    --color-black: #0F0F0F;
    --color-green: #016340;
    --color-white: #ffffff;
}

*{

    margin:0;
    padding: 0;
font-family: 'Roboto', sans-serif;
}
h1{
color:var(--color-green);
}
`;
