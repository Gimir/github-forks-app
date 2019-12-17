import React from 'react';

const Pagination = ({onPrevClick, onNextClick, prevDisabled, nextDisabled}) => {
    return (
        <div>
            <button onClick={ () => onPrevClick() } disabled={prevDisabled}>Prev</button>
            <button onClick={ () => onNextClick() } disabled={nextDisabled}>Next</button>
        </div>
    );
};

export default Pagination;