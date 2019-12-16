import React from 'react';

const Pagination = ({onPrevClick, onNextClick, prevDisabled, nextDisabled}) => {
    return (
        <div>
            <button onClick={e => {
                e.preventDefault();
                onPrevClick();
            }} disabled={prevDisabled}>Prev</button>
            <button onClick={e => {
                e.preventDefault();
                onNextClick();
            }} disabled={nextDisabled}>Next</button>
        </div>
    );
};

export default Pagination;