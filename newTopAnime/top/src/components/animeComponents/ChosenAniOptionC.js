import React, { useContext } from 'react';
import { StyledOptionDiv } from '../../reusableStyles';
import { ChosenAniOptionContext } from '../../contexts/ChosenAniOptionContext';

const ChosenAniOptionC = () => {
  
    const { chosenAniOption } = useContext(ChosenAniOptionContext);
    
    
    return (
        <StyledOptionDiv>
            {chosenAniOption}
        </StyledOptionDiv>
    )
}

export default ChosenAniOptionC
  
