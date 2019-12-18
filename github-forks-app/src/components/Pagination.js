import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledDiv = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        width: 80px;
        height: 50px;
        border: none;
        background-color: ${colors.second};
        font-size: 20px;
        color: ${colors.text};
        transition: 0.2s;

        &:hover {
            opacity: 0.8;
            cursor: pointer;
        }

        &:disabled:hover {
            opacity: 1;
            cursor: default;
        }
    }
    button:first-child {
        border-radius: 10px 0 0 10px;
        border-right: 1px solid ${colors.main};
    }
    button:last-child {
        border-radius: 0 10px 10px 0;
        border-left: 1px solid ${colors.main};
    }
`;

const Pagination = ({onPrevClick, onNextClick, prevDisabled, nextDisabled}) => {
    return (
        <StyledDiv>
            <button onClick={onPrevClick} disabled={prevDisabled}>Prev</button>
            <button onClick={onNextClick} disabled={nextDisabled}>Next</button>
        </StyledDiv>
    );
};

export default Pagination;