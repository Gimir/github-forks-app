import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setRequestData } from '../actionCreators/requestData';

import SearchField from './SearchField';


const HeaderContainer = ({setDataForFetching, history}) => {
    const [inputValue, setInputValue] = useState('');

    const onBtnClick = () => {
        const [owner, repo] = inputValue.split('/');
        setDataForFetching(owner, repo);
        history.push(`/search/${owner}/${repo}/1`);
    };
    const onInputChange = e => {
        const value = e.target.value;
        setInputValue(value);
    }
    return (
        <SearchField onBtnClick={onBtnClick} onInputChange={onInputChange} inputValue={inputValue} />
    );
};

const mapDispatchToProps = dispatch => ({
    setDataForFetching: (owner, repo, page=1) => dispatch(setRequestData(owner, repo, page))
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(HeaderContainer));