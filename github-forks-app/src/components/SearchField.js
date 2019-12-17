import React from 'react';

const styles = {
    
}

const SearchField = ({onBtnClick, onInputChange, inputValue}) => {
    
    return (
        <nav>
            <form>
                <input type="text" value={inputValue} onChange={onInputChange} />
                <button onClick={()=> onBtnClick()}>search</button>
            </form>
        </nav>
    );
};

export default SearchField;
