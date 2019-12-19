import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const AnimatedDiv = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &::after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid ${colors.main};
        border-color: ${colors.main} transparent ${colors.main} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`;

const Spinner = () => <AnimatedDiv></AnimatedDiv>;

export default Spinner;