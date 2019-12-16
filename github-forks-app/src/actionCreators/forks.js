import axios from 'axios';
import { SET_FORKS } from '../constants/actions';
import { startLoading, stopLoading } from './onLoad';

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
                dispatch(stopLoading());
                
                const forks = res.data.map(fork => {
                    return {
                        id: fork.id,
                        repositoryName: fork.full_name,
                        author: {
                            login: fork.owner.login,
                            avatar_url: fork.owner.avatar_url
                        },
                        stars: fork.stargazers_count,
                        url: fork.clone_url
                    };
                });

                dispatch(setForks(forks));
            })
            .catch(err => {
                dispatch(stopLoading());
                alert('Request has not completed!');
                console.log(err.message);
            });
    };
};