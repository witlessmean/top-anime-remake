import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

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
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    margin: 0;
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
-webkit-box-shadow: 0 10px 5px #888888;
-moz-box-shadow: 0 10px 5px #888888;
box-shadow: 0 10px 5px #888888;
border-radius: 8px;
margin: 10px;
background-color: rgba(27, 23, 23, 0.1);
width: 400px;
height: 300px;
display: flex;
overflow: hidden;

div { 
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;  
  
}

  div a {
    text-decoration: none;
    color: black;
    &:hover {
      visibility: visible;
    }
  }

`



export const StyledInfoContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
`
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
`
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
`

//////////////////tooltip styles////////////////

export const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[4],
    fontSize: 11,
  },
}))(Tooltip);



  //we will build out the container. i want the images as large as they can be. what we will do to compensate for this, is build out the container that they're all in to be the same size, and we will hide overflow. 

  //also we need to be able to let the user know what kind of anime he's looking at AFTER he clicks on the button. and so with that being said, we will need to add an argument to the button so that when you click for example, the 'special' button, it will write special somewhere in big letters to let you know that's where you are. 

  //to the container we will need to add the name, how many episodes it has etc. 

  //click on titles themselves to be sent to myanimelist link. 

  //score, rank, episodes, start date and end date

  //if statement to be able to make anime/manga nav disappear

  //add the text for what is clicked

  //make components for the title etc

  
  
  
  
  //loading spinner

  //dark mode

  //make title of button show

  //make it so you can make nav disappear when you press on anime/manga button 

  //break apart map parts into smaller components. 

  //create logo 

  //readme

  //have cursor next to buttons and when clicked the cursor goes away. fades. 

  //just design the fucking logo myself in paint. I only need to make 2 lines and i should be able to make a transparent background.

  //add footer

  //i want the button inputs to ease in and out. https://reactjs.org/docs/animation.html

  //when i press anime/manga button, the inputs should appear under them. This is to avoid confusion considering that the manga btton will be right next to the inputs if i stay the current way.

  //also right when the app starts, it should tell us that we're viewing airing. 

  //maybe pass animeButton ANOTHER state and this state will have an open/closed or true/false. maybe somehow we can implement that/ 
  //still have some console logging to do. maybe try and get into the navState object and see if we need to use that instead of just navState === something. 

  //after app is finished, maybe get rid of animeData context all together. seems useless. 

  //clean up this particular css page. we can use the arrows to make single lines and add nice glossary