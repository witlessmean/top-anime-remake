import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    hr {
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
    }
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
border: 1.7px solid rgba(0,0,0, 0.5);
margin: 10px;
background-color:rgba(27, 23, 23, 0.1);
width: 400px;
height: 300px;
display: flex;
overflow: hidden; 
////selects the img div within the styled container
 div:nth-child(1) { 
  display: flex;
  justify-content: center;
  align-items: center;  
  } 
////selects the info div within the styled container
  div:nth-child(2) { 
  display: flex;
  } 
  `
export const StyledInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
flex-grow: 1;
font-family: 'Roboto', sans-serif;
////represents every section of the info container
div:nth-child(1) {
font-size: 1.7rem;
}
div:nth-child(2) {
margin-top: 0.5vh;
font-size: 1.7rem;
}
div:nth-child(3) {
margin-top: 0.5vh; 
font-size: 2.4rem;
a {
  text-decoration: none;
  color: black;
  }
}
div:nth-child(4) {
margin-top: 0.5vh;
}
div:nth-child(5) {
margin-top: 0.5vh;
}
div:nth-child(6) {
margin-top: 0.5vh;
}
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
//////////////ChosenOption styles////////////////
export const StyledOptionDiv = styled.div`
margin: 5vh 2vw 5vh 2vw;
display: flex;
justify-content: center;
align-content: center;
font-family: 'Goldman', cursive;
font-size: 4rem;
`
////tooltip styles
export const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[4],
    fontSize: 11,
  },
}))(Tooltip);

////customizing material UI buttons
export const CustomMainButton = withStyles({
  root: {
    width: '5vw',
    height: '2.5em',
    fontWeight: 'bolder',
    fontSize: 17,
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#c4dbf5',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,120,255,.8)',
    },
  },
})(Button);





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

  //https://material-ui.com/customization/typography/   use this link to look at how to use mediaQ's for fonts inside the buttons. 

  //if anime is open and i click manga i need to erase the option. 

  //FAQ page

  //fix all the imports to be in order/more readable

  //useMemo

  //when finished, find a better and brighter color scheme

  //optimize css for faster load

  //node_modules\.bin\cypress open

  //react smooth scroll check out

//write in nav or something directions with the hand icon to let users know that we can click on anime buttons and also the anime titles to go to myanimelist link. 


//use the same opaque styling as ani chart, have an arrow that points down in case we want to see the whole picture. it will have a z index and be 100% width and height with a 0.5 opaque background