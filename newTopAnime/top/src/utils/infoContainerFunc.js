import React from 'react';
import { StyledInfoContainer, CustomTooltip, GoodMoodIcon, BadMoodIcon } from '../reusableStyles';


//revealFont will be used to conditionally render the fontSize
export const infoContainerFunc = (rank, score, url, title, startDate, episodes, type, revealFont) => {
    return (
    <StyledInfoContainer style={revealFont}><div style={revealFont}>rank:{rank}</div><div style={revealFont}>rating:    {score}{ score > 7 ? <GoodMoodIcon style={revealFont} /> : <BadMoodIcon style={revealFont} /> }</div> <div style={revealFont}> <CustomTooltip title="myanimelist link" placement="right"><a target="_blank" rel="noopener noreferrer" href={url}>{title}</a></CustomTooltip></div><div>{startDate}</div>{episodes > 0 ? <div>episodes: {episodes}</div> : <div>episodes: unknown</div>  }<div>type: {type}</div></StyledInfoContainer>
    )
  };


