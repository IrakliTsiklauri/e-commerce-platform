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
    padding: 0 100px 100px;

}
`;
