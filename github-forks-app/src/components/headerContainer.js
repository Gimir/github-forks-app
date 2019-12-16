import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setRequestData } from '../actionCreators/requestData';

import Header from './header';


const HeaderContainer = ({setDataForFetching, history}) => {
    const [inputValue, setInputValue] = useState('');

    const onBtnClick = (inputValue) => {
        const params = inputValue.split('/');
        setDataForFetching(params[0], params[1], 1);
        history.push(`/search/${params[0]}/${params[1]}/1`);
    };
    const onInputChange = e => {
        const value = e.target.value;
        setInputValue(value);
    }
    return (
        <Header onBtnClick={onBtnClick.bind(this, inputValue)} onInputChange={onInputChange} inputValue={inputValue} />
    );
};

const mapDispatchToProps = dispatch => ({
    setDataForFetching: (owner, repository, page) => dispatch(setRequestData(owner, repository, page))
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(HeaderContainer));