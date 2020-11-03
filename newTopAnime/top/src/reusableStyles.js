import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }`

  ////wrapper for the map////
  
  export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  img{
    width: 10vw;
    border-radius: 8px
  }
  `;