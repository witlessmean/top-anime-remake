import React, {useContext}from 'react'
import {AnimeUrlContext} from '../../contexts/AnimeUrlContext' ;
import {ChosenAniOptionContext} from '../../contexts/ChosenAniOptionContext';
import {StyledInputs} from '../../reusableStyles';
import Button from '@material-ui/core/Button';
import {useSpring, animated} from 'react-spring';

const AnimeInputs = () => {
    
    const springProps = useSpring({opacity: 1, from: {opacity: 0}})
    const { animeUrl, setAnimeUrl } = useContext(AnimeUrlContext);
    const { chosenAniOption, setChosenAniOption } = useContext(ChosenAniOptionContext);
   
        const animeInputsButton = (topOption) => {
        setAnimeUrl(topOption)
        setChosenAniOption(topOption)
        }
    
    
    return (
        <StyledInputs>
                  <animated.ul style={springProps}>
                  <li><Button variant="contained" color="primary" type='button' value='upcoming' size="large" onClick={(e) => animeInputsButton('upcoming')}>Upcoming</Button></li>
                  <li><Button variant="contained" color="primary" type='button' value='airing' size="large" onClick={(e) => animeInputsButton('airing')}>Airing</Button></li>
                  <li><Button variant="contained" color="primary" type='button' value='tv' size="large" onClick={(e) => animeInputsButton('tv')}>TV</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='movie' size="large" onClick={(e) => animeInputsButton('movie')}>Movie</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='ova' size="large" onClick={(e) => animeInputsButton('ova')}>OVA</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='special' size="large" onClick={(e) => animeInputsButton('special')}>Special</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='bypopularity' size="large" onClick={(e) => animeInputsButton('bypopularity')}>bypopularity</Button> </li>
                  <li><Button variant="contained" color="primary" type='button' value='favorite' size="large" onClick={(e) => animeInputsButton('favorite')}>Favorite</Button> </li>
                  </animated.ul>
        </StyledInputs>
    )
}


export default AnimeInputs

