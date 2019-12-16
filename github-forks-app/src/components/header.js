import React from 'react';

const styles = {
    
}

const Header = ({onBtnClick, onInputChange, inputValue}) => {
    
    return (
        <nav>
            <form>
                <input type="text" value={inputValue} onChange={onInputChange} />
                <button onClick={(e)=>{
                    e.preventDefault();
                    onBtnClick();
                }}>search</button>
            </form>
        </nav>
    );
};

export default Header;
