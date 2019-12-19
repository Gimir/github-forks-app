import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledDiv = styled.div`
    width: 100%;
    height: 50px;
    margin: 20px 0 20px 0;
    display: flex;
    justify-content: center;

    button {
        height: 100%;
        padding: 0 10px 0 10px;
        background-color: ${colors.second};
        cursor: pointer;
        transition: 0.2s;
        border: none;
        border-radius: 10px;
        font-size: 18px;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const OpenModalBtn = ({onBtnClick}) => (
    <StyledDiv>
        <button onClick={()=> onBtnClick()}>Edit Favorites</button>
    </StyledDiv>
);

export default OpenModalBtn;