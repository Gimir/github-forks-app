import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

import ForkRow from './ForkRow';

const StyledDiv = styled.div`
    max-width: 700px;
    min-width: 300px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
const StyledHeader = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${colors.main};
    line-height: 50px;
    text-align: left;
    color: ${colors.text};
    font-size: 18px;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex-direction: row;
`;
const StyledFooter = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${colors.main};
    border-radius: 0 0 10px 10px;
`;
const StyledColumn = styled.div`
    height: 100%;
    padding: 0 5px 0 5px;
    overflow: hidden;
`;
const StyledSpace = styled.div`
    width: 100%;
    border-right: 1px solid ${colors.main};
    border-left: 1px solid ${colors.main};
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100px;
`;

const ForksList = ({forks, favorites}) => (
    <StyledDiv>
        <StyledHeader>
            <StyledColumn style={{width: '30%'}}>Author</StyledColumn>
            <StyledColumn style={{width: '40%'}}>Repository Name</StyledColumn>
            <StyledColumn style={{width: '15%'}}>Stars</StyledColumn>
            <StyledColumn style={{width: '15%'}}>Link</StyledColumn>
        </StyledHeader>
            {
               forks.length < 1 
               ? 
               <StyledSpace>There is no forks of this repository(</StyledSpace>
               :
                forks.map(fork => (
                    <ForkRow 
                        author={fork.author.login} 
                        repName={fork.repositoryName} 
                        stars={fork.stars} 
                        link={fork.url} 
                        key={fork.id}
                        favorite={favorites.includes(fork.repositoryName)}
                    />
                ))
            }
        <StyledFooter></StyledFooter>
    </StyledDiv>
);

export default ForksList;