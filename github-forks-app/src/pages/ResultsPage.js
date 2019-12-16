import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchForks } from '../actionCreators/forks';
import { setRequestData } from '../actionCreators/requestData';
import { withRouter } from 'react-router-dom';

import Pagination from '../components/pagination';

const ResultsPage = ({
    forks,
    favorites,
    onLoad,
    fetchForks,
    setRequestData,
    history,
    match,
    requestData
}) => {
    useEffect(()=> {
        fetchForks(
            match.params.owner,
            match.params.repName,
            match.params.number
        );
    }, [requestData])

    const changePage = (number) => {
        history.push(`/search/${match.params.owner}/${match.params.repName}/${Number(match.params.number) + number}`);
        setRequestData( 
            match.params.owner,
            match.params.repName,
            match.params.number + number
        );
        
    };

    if(onLoad) return <h1>Loading...</h1>

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
                prevDisabled={Number(match.params.number) === 1}
                nextDisabled={forks.length < 10}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    requestData: state.requestData,
    forks: state.forks,
    favorites: state.favoritForks,
    onLoad: state.onLoad
});

const mapDispatchToProps = dispatch => ({
    fetchForks: (owner, repository, page) => dispatch(fetchForks(owner, repository, page)),
    setRequestData: (owner, repository, page) => dispatch(setRequestData(owner, repository, page))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsPage));