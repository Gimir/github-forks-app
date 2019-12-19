import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CloseBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 111;
`;

const StyledModal = styled.form`
    width: 100%;
    max-width: 600px;
    min-width: 300px;
    height: 200px;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 10px 0 10px;
    position: relative;
    z-index: 333;

    input[type="text"] {
        width: 60%;
        height: 50px;
        border: 2px solid ${colors.second};
        color: ${colors.text};
        padding: 10px;
        font-size: 18px;
        border-radius: 10px 0 0 10px;
        outline: none;
    }
    button {
        width: 20%;
        height: 50px;
        border: none;
        outline: none;
        font-size: 20px;
        color: #fff;
        background-color: ${colors.second};
        transition: 0.2s;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
        &:disabled:hover {
            cursor: default;
            opacity: 1;
        }
    }
    button:last-Child {
        background-color: ${colors.error};
        border-radius: 0 10px 10px 0;
    }
`;

const FavorModal = ({
    inputValue, 
    onInputChange, 
    invalidInput, 
    onAddClick,
    onRemoveClick,
    onBackClick
    }) => (
    <StyledBack>
        <CloseBackground onClick={onBackClick}></CloseBackground>
        <StyledModal>
            <input 
                type="text" 
                value={inputValue} 
                onChange={onInputChange} 
                style={{borderColor: invalidInput ? colors.error : colors.second}}
                placeholder="Owner/repository"    
            />
            <button onClick={e => {
                e.preventDefault();
                onAddClick();
            }} disabled={invalidInput}>Add</button>
            <button onClick={e => {
                e.preventDefault();
                onRemoveClick();
            }} disabled={invalidInput}>Remove</button>
        </StyledModal>
    </StyledBack>
);

export default FavorModal;