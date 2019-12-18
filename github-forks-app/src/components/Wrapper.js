import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px 30px 10px;
`;

const Wrapper = ({children}) => (
    <StyledDiv>
        {children}
    </StyledDiv>
);

export default Wrapper;