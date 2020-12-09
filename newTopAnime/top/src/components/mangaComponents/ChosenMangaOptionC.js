import React, { useContext } from 'react';
import { StyledOptionDiv } from '../../reusableStyles';
import { ChosenMangaOptionContext } from '../../contexts/ChosenMangaOptionContext';

const ChosenMangaOptionC = () => {
    const { chosenMangaOption } = useContext(ChosenMangaOptionContext);
        
    return (
        <StyledOptionDiv>
             {chosenMangaOption}
        </StyledOptionDiv>
    )
}

export default ChosenMangaOptionC
