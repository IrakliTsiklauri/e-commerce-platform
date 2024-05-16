import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, input, button{
   font-family: "Kumbh Sans", sans-serif;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    width: 100vh;
}
`;
