import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { NavLink } from 'react-router-dom';
import { device } from './utils/mediaBreakPoints';

////wrapper for the map////
export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;`
  //////container////////
export const StyledContainer = styled.div` 
-webkit-box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
-moz-box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
//box-shadow: 0 10px 5px #888888;
border-radius: 8px;
border: 1.7px solid rgba(0,0,0, 0.5);
margin: 15px 10px;
background-color:rgba(27, 23, 23, 0.1);
display: flex;
overflow: hidden; 
@media ${device.tablet}{
  width: 400px;
  height: 300px;
};
@media ${device.mobileS}{
  position: relative;
  justify-content: center;
  align-items: center;
}
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
@media ${device.mobileS}{
  position: absolute;
};
@media ${device.tablet}{
  position: static;
}
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

export const MobileMainButton = withStyles({
  root: {
    width: '2vw',
    height: '2.5em',
    //fontWeight: 'bolder',
    fontSize: '1.4rem',
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#c4dbf5',
      borderColor: '#005cbf',
    },
},
})(Button);

////material-ui icons
export const GoodMoodIcon = withStyles({
  root: {
    fontSize: 'large',
    color: '#33b849',
  }
})(MoodIcon);

export const BadMoodIcon = withStyles({
  root: {
    fontSize: 'large',
    color: '#de3333',
  }
})(MoodBadIcon);

export const MobileSunIcon = withStyles({
  root: {
    fontSize: '3rem',
    color: '#f7f7f7'
  }
})(Brightness7Icon);

export const MobileMoonIcon = withStyles({
  root: {
    fontSize: '3rem',
    color: '#f7f7f7'
  }
})(Brightness4Icon);

export const UpIcon = withStyles({
  root: {
    fontSize: '8rem',
    color: 'rgba(245, 245, 245, 0.8)'
  }
})(ExpandLessIcon);

export const DownIcon = withStyles({
  root: {
    fontSize: '8rem',
    color: 'rgba(245, 245, 245, 0.8)'
  }
})(ExpandMoreIcon);
////mobile menu styles

export const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(Menu)

export const StyledMenuItem = withStyles((theme) => ({
  root: {
      fontSize: '1.6rem'
  
    },
 }))(MenuItem);




//improve load performance https://www.youtube.com/watch?v=5fLW5Q5ODiE

//add footer with github link

