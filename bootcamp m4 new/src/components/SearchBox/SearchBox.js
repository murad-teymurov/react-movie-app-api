import React from 'react';
import './SearchBox.css';

const SearchBox = ({setSearchValue,searchValue,  setDataval }) => {
  
    
    // searchBoxSubmitHandler = (e) => {
    //     e.preventDefault();
    // }
 
    // searchLineChangeHandler = (e) => {
    //     props.searchValue.setState({
    //         props.setSearchValue(e.target.value)
    //     })
    //     // this.setState({ searchLine: e.target.value });
    // }

    return (
        <div className="search-box">
            <form className="search-box__form" >
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchValue}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        // onChange={this.searchLineChangeHandler}
                        onChange ={(event) =>  {
                             
                        setSearchValue(event.target.value)}}
                    // onChange={this.searchMovie}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    onClick={(event) => {
                        event.preventDefault() 
                        setDataval( searchValue)}}
                // disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}
export default SearchBox;