import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledDiv = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px 0 10px;
    color: ${colors.text};

    h1 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    h2 {
        font-size: 30px;
        font-weight: bold;
        min-width: 300px
        max-width: 600px;
        text-align: center;
    }
`;

const HomePage = props => {
    return (
        <StyledDiv>
            <h1>WELCOME</h1>
            <h2>This is the Fork's App! Type the full name of repository in the search input and you will get full fork list of it with main information!</h2>
        </StyledDiv>
    );
};

export default HomePage;