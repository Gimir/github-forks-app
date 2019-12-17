import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForks } from '../actionCreators/forks';
import { setRequestData } from '../actionCreators/requestData';
import { withRouter } from 'react-router-dom';

import Pagination from '../components/Pagination';

const ResultsPage = ({
    forks,
    onLoad,
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

    if (onLoad) return <h1>Loading...</h1>

    return (
        <div>
            {
                forks.map(fork => {
                    return <h3 key={fork.id}>{fork.author.login}</h3>
                })
            }
            <Pagination 
                onNextClick={changePage.bind(this, 1)}
                onPrevClick={changePage.bind(this, -1)}
                prevDisabled={Number(number) === 1}
                nextDisabled={forks.length < 10}
            />
        </div>
    );
};

const mapStateToProps = ({requestData, forks, favoriteForks, onLoad}) => ({
    requestData: requestData,
    forks: forks,
    favorites: favoriteForks,
    onLoad: onLoad
});

const mapDispatchToProps = dispatch => ({
    fetchForks: (owner, repository, page) => dispatch(fetchForks(owner, repository, page)),
    setRequestData: (owner, repository, page) => dispatch(setRequestData(owner, repository, page))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsPage));