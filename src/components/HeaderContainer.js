import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setRequestData } from '../actionCreators/requestData';

import SearchField from './SearchField';


const HeaderContainer = ({setDataForFetching, history}) => {
    const [inputValue, setInputValue] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);

    const onBtnClick = () => {
        const inputValidator = new RegExp(/^([a-z0-9]|[a-z0-9](-(?!-)|[a-z0-9]){0,37}[a-z0-9])\/[a-z0-9-]{1,39}$/i);
        if (inputValidator.test(inputValue)) {
            const [owner, repo] = inputValue.split('/');
            setDataForFetching(owner, repo, 1);
            history.push(`/search/${owner}/${repo}/1`);
            setInvalidInput(false);
            setInputValue('');
        }
        else {
            setInvalidInput(true);
            alert('The search query must be "owner/repository"');
        }
        
    };

    const onInputChange = e => {
        const { value } = e.target;
        setInputValue(value);
    }
    
    return (
        <SearchField 
            onBtnClick={onBtnClick} 
            onInputChange={onInputChange} 
            inputValue={inputValue}
            invalidInput={invalidInput} 
        />
    );
};

const mapDispatchToProps = dispatch => ({
    setDataForFetching: (owner, repo, page) => dispatch(setRequestData(owner, repo, page))
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(HeaderContainer));