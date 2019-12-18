import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForks } from '../actionCreators/forks';
import { setRequestData } from '../actionCreators/requestData';
import { withRouter } from 'react-router-dom';

import Pagination from '../components/Pagination';
import NotFoundPage from './NotFoundPage';
import Wrapper from '../components/Wrapper';
import ForksList from '../components/ForksList';
import Spinner from '../components/Spinner';

const ResultsPage = ({
    forks,
    fetchStatus,
    fetchForks,
    setRequestData,
    history,
    match,
    requestData
}) => {
    const { owner, repName, number } = match.params;

    useEffect(()=> {
        fetchForks(owner, repName, number);
    }, [requestData])

    const changePage = (n) => {
        history.push(`/search/${owner}/${repName}/${Number(number) + n}`);
        setRequestData( owner, repName, number + n );
        
    };

    if (fetchStatus.error) return <NotFoundPage value={`${owner}/${repName}`} />

    return (
        <div>
            <Wrapper>
                {fetchStatus.loading ? <Spinner /> : <ForksList forks={forks} />}
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
    setRequestData: (owner, repository, page) => dispatch(setRequestData(owner, repository, page))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsPage));