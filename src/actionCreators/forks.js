import axios from 'axios';
import { SET_FORKS } from '../constants/actions';
import { startLoading, stopLoadingSuccess, stopLoadingError } from './fetchStatus';

const ENDPOINT = 'https://api.github.com';
//user/repos?page=2&per_page=100


export const setForks = forks => ({
    type: SET_FORKS,
    payload: forks
});


export const fetchForks = (owner, repository, page) => {
    return dispatch => {
        dispatch(startLoading());

        axios
            .get(`${ENDPOINT}/repos/${owner}/${repository}/forks?page=${page}&per_page=10`)
            .then(res => {
                dispatch(stopLoadingSuccess());
                
                const forks = res.data.map(fork => {
                    const { 
                        id,
                        full_name, 
                        stargazers_count,
                        clone_url,
                        owner: {
                            login,
                            avatar_url
                        }, 
                    } = fork;

                    return {
                        id,
                        author: {
                            login,
                            avatar_url,
                        },
                        repositoryName: full_name,
                        stars: stargazers_count,
                        url: clone_url,
                    };
                });

                dispatch(setForks(forks));
            })
            .catch(err => {
                dispatch(stopLoadingError(err.message));
                dispatch(setForks([]));
            });
    };
};