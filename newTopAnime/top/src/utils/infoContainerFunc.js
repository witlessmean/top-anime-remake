import React from 'react';
import { StyledInfoContainer, CustomTooltip, GoodMoodIcon, BadMoodIcon } from '../reusableStyles';



export const infoContainerFunc = (rank, score, url, title, startDate, episodes, type) => {
    return (
    <StyledInfoContainer><div>rank:{rank}</div><div>rating:    {score}{ score > 7 ? <GoodMoodIcon /> : <BadMoodIcon/> }</div> <div> <CustomTooltip title="myanimelist link" placement="right"><a target="_blank" rel="noopener noreferrer" href={url}>{title}</a></CustomTooltip></div><div>{startDate}</div>{episodes > 0 ? <div>episodes: {episodes}</div> : <div>episodes: unknown</div>  }<div>type: {type}</div></StyledInfoContainer>
    )
  }