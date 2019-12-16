import React from 'react';

const styles = {
    
}

const Header = props => {
    return (
        <nav>
            <form>
                <input type="text" onChange={()=>{}} />
                <button onClick={e=> {
                    e.preventDefault();
                    props.onClick();
                    props.changePage();
                }}>search</button>
            </form>
        </nav>
    );
};

export default Header;