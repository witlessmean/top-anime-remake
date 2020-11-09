import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;  
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body { 
    background-color: #eae7dc; 
    font-size: 1.6rem;
  }
  `

  ////wrapper for the map////
  
  export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;`
  

///////container////////

export const StyledContainer = styled.div`
margin: 10px;
background-color: red;
width: 300px;
height: 300px;
display: flex;
overflow: hidden;
div img {
  border-radius: 8px;
}
div { background-color: yellow; }
`
// img{
    
//   width:  200px;
// height: 200px;
// object-fit: cover;
/////////////Inputs/////////////

export const StyledInputs = styled.div`
display: flex;
justify-content: center;

ul li{
    
list-style: none;
display: inline;
text-align: center;
margin: 2px;
}

ul li input{
    width: 100px;
    height: 40px;
}
`

  //we will build out the container. i want the images as large as they can be. what we will do to compensate for this, is build out the container that they're all in to be the same size, and we will hide overflow. 

  //also we need to be able to let the user know what kind of anime he's looking at AFTER he clicks on the button. and so with that being said, we will need to add an argument to the button so that when you click for example, the 'special' button, it will write special somewhere in big letters to let you know that's where you are. 

  //to the container we will need to add the name, how many episodes it has etc. 

  //loading spinner

  //click on titles themselves to be sent to myanimelist link. 

  //score, rank, episodes, start date and end date