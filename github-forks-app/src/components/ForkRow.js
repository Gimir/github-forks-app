import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledDiv = styled.div`
    width: 100%;
    height: 50px;
    border-right: 1px solid ${colors.main};
    border-left: 1px solid ${colors.main};
    display: flex;
    flex-direction: row;
`;
const StyledColumn = styled.div`
    height: 100%;
    text-aign: left;
    font-size: 14px;
    color: ${colors.text};
    padding: 0 5px 0 5px;
    overflow: hidden;
    border-right: 1px solid ${colors.main};
`;

const ForkRow = ({
    author,
    repName,
    stars,
    link,
    favorite
}) => (
    <StyledDiv style={{backgroundColor: favorite ? colors.second : ''}}>
        <StyledColumn style={{width: '30%'}}>{author}</StyledColumn>
        <StyledColumn style={{width: '40%'}}>{repName}</StyledColumn>
        <StyledColumn style={{width: '15%'}}>{stars}</StyledColumn>
        <StyledColumn style={{width: '15%'}}><a href={link} style={{color: colors.links}}>Go to</a></StyledColumn>
    </StyledDiv>
);

export default ForkRow;