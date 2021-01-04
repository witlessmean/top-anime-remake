import React, { useContext } from 'react';
import styled from 'styled-components';
import { infoContainerFunc } from '../../utils/infoContainerFunc';
import { CurrentAnimePicsContext } from '../../contexts/CurrentAnimePicsContext';
import { v4 as uuidv4 } from "uuid";

//we're able to receive 'up' from the theme provider inside of the MobileReveal component. 
const StyledMobileInfoTextReveal = styled.div`

/* height: ${ (props) => {
  return props.theme.up === true ? '16% ' : '100% '
} 
  }; */
`

const MobileInfoTextReveal = ({up}) => {
    
const { currentAnimePics } = useContext(CurrentAnimePicsContext)
console.log(currentAnimePics)
    return (
        <>
        {/* {currentAnimePics.map((topPic) => {
          return         <StyledMobileInfoTextReveal key={uuidv4()}>
          {infoContainerFunc(topPic.rank, topPic.score, topPic.url, topPic.title, topPic.startDate ,topPic.episodes, topPic.type) }
      </StyledMobileInfoTextReveal>
        })}
         */}

    </>
    )
}

export default MobileInfoTextReveal

//key={uuidv4()}

//two major problems, why do I have to say not up here instead of up? secondly i need to trace some of this function back because I'm not getting the title. 


//i have two map functions. one will run if we are on mobile, and one will run if we are not on mobile. 
//i can use a useEffect in order to run function to show the mapped info every single time up changes. The info will sit on top of the arrow in a column style. 

//so i dont have to randomly run a map every single time someone clicks on an arrow and so i can run the map right when the app starts every time, why don't I run the map like normal, but have the text at 0 height and then have the text grow to its normal height while havingh an ease on that grow. 