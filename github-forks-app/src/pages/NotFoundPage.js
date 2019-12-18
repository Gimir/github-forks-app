import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledDiv = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 60px;
        color: ${colors.text};
        font-weight: bold;
        margin-bottom: 50px;
    }
    h2 {
        font-size: 40px;
        color: ${colors.text};
        font-weight: bold;
    }
`;

const NotFoundPage = ({value='Page'}) => (
    <StyledDiv>
        <h1>404</h1>
        <h2>{value} not found!</h2>
    </StyledDiv>
);

export default NotFoundPage;