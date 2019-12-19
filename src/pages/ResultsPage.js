import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForks } from '../actionCreators/forks';
import { setRequestData } from '../actionCreators/requestData';
import { withRouter } from 'react-router-dom';
import { addFavorFork, removeFavorFork } from '../actionCreators/favoritForks';

import Pagination from '../components/Pagination';
import NotFoundPage from './NotFoundPage';
import Wrapper from '../components/Wrapper';
import ForksList from '../components/ForksList';
import Spinner from '../components/Spinner';
import FavorModal from '../components/FavorModal';
import OpenModalBtn from '../components/OpenModalBtn';

const ResultsPage = ({
    forks,
    fetchStatus,
    fetchForks,
    setRequestData,
    history,
    match,
    requestData,
    addFavor,
    removeFavor,
    favorites
}) => {
    const [modalInputValue, setModalInputValue] = useState('');
    const [modalInputShow, setModalInputShow] = useState(false);
    const [modalInputInvalid, setModalInputInvalid] = useState(false);
    const { owner, repName, number } = match.params;
    const inputValidator = new RegExp(/^([a-z0-9]|[a-z0-9](-(?!-)|[a-z0-9]){0,37}[a-z0-9])\/[a-z0-9-]{1,39}$/i);

    const changePage = (n) => {
        history.push(`/search/${owner}/${repName}/${Number(number) + n}`);
        setRequestData( owner, repName, number + n );
    };

    const onModalInputChange = e => {
        const { value } = e.target;
        if (modalInputInvalid) setModalInputInvalid(!inputValidator.test(value));
        setModalInputValue(value);
    };

    const onAddFavorClick = (value) => {
        if (!inputValidator.test(value)) {
            setModalInputInvalid(true);
            return;
        };
        addFavor(value);
        setModalInputValue('');
        setModalInputShow(false);
    };

    const onRemoveFavorClick = value => {
        if (!inputValidator.test(value)) {
            setModalInputInvalid(true);
            return;
        };
        removeFavor(value);
        setModalInputValue('');
        setModalInputShow(false);
    }

    const onShowModalClick = () => {
        setModalInputShow(!modalInputShow);
    };

    useEffect(()=> {
        fetchForks(owner, repName, number);
    }, [requestData]);

    useEffect(() => {
        const storingData = JSON.stringify(favorites);
        localStorage.setItem('favorites', storingData);
    }, [favorites])

    if (fetchStatus.error) return <NotFoundPage value={`${owner}/${repName}`} />

    return (
        <div>
            {modalInputShow ?
            <FavorModal
                inputValue={modalInputValue}
                onInputChange={onModalInputChange}
                invalidInput={modalInputInvalid}
                onAddClick={onAddFavorClick.bind(this, modalInputValue)}
                onRemoveClick={onRemoveFavorClick.bind(this, modalInputValue)}
                onBackClick={onShowModalClick}
            />
            :
            <></>}
            <OpenModalBtn onBtnClick={onShowModalClick} />
            <Wrapper>
                {fetchStatus.loading ? <Spinner /> : <ForksList forks={forks} favorites={favorites} />}
            </Wrapper>
            <Pagination 
                onNextClick={changePage.bind(this, 1)}
                onPrevClick={changePage.bind(this, -1)}
                prevDisabled={Number(number) === 1}
                nextDisabled={forks.length < 10}
            />
        </div>
    );
};

const mapStateToProps = ({requestData, forks, favoriteForks, fetchStatus}) => ({
    requestData: requestData,
    forks: forks,
    favorites: favoriteForks,
    fetchStatus: fetchStatus
});

const mapDispatchToProps = dispatch => ({
    fetchForks: (owner, repository, page) => dispatch(fetchForks(owner, repository, page)),
    setRequestData: (owner, repository, page) => dispatch(setRequestData(owner, repository, page)),
    addFavor: fullName => dispatch(addFavorFork(fullName)),
    removeFavor: fullName => dispatch(removeFavorFork(fullName))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsPage));