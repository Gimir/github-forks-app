import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledNav = styled.nav`
    width: 100%;
    height: 100px;
    background-color: ${colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0 10px;
`;

const StyledForm = styled.form`
    max-width: 500px;
    min-width: 300px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;

    input[type="text"] {
        width: 80%;
        height: 100%;
        border: 2px solid #fff;
        color: ${colors.text};
        padding: 10px;
        font-size: 18px;
        border-radius: 10px 0 0 10px;
    }

    button {
        width: 20%;
        height: 100%;
        border: none;
        font-size: 20px;
        color: #fff;
        background-color: ${colors.second};
        border-radius: 0 10px 10px 0;
        transition: 0.2s;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
`;

const SearchField = ({onBtnClick, onInputChange, inputValue, invalidInput}) => {
    
    return (
        <StyledNav>
            <StyledForm>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={onInputChange} 
                    style={{borderColor: invalidInput ? colors.error : '#fff'}}
                    placeholder="Owner/repository"    
                />
                <button onClick={e => {
                    e.preventDefault();
                    onBtnClick();
                }}>search</button>
            </StyledForm>
        </StyledNav>
    );
};

export default SearchField;
