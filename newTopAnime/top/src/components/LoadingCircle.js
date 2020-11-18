import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';


const StyledCircle = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const LoadingCircle = () => {
    return (
        <StyledCircle>
            <CircularProgress/>
        </StyledCircle>
    )
}

export default LoadingCircle
