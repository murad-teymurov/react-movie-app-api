import React, { useReducer, useEffect, useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import { initialState, reducer } from '../../cases';
import axios from "axios";
// import Reducer from '../../store/Reducer';



const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [dataval, setDataval] = useState('');
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [favorites, setFavorites] = useState([])

    const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

    useEffect(() => {
      axios.get(MOVIE_API_URL).then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.data.Search
        });
      });
    }, []);


   const getMovieRequest = async (searchValue) => {

        const url = `https://www.omdbapi.com/?s=${dataval}&apikey=dc88199b`
        

        const response = await fetch(url);
        const responseJson = await response.json();

        // console.log(responseJson);
        if(responseJson.Search){
            setMovies(responseJson.Search)
        }
    }
   
    
    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue, dataval])

    const addFavoriteItem =(movie) =>{
        const newFavorites = [...favorites,movie];
        if(!favorites.includes(movie)){
            setFavorites(newFavorites);
        }
       
    }
    const removeFavoriteItem =(movie) =>{
        const newFavorites = favorites.filter((elem) => elem.imdbID !== movie.imdbID);

        setFavorites(newFavorites);
    }

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox searchValue={searchValue} setSearchValue ={setSearchValue} dataval={dataval} setDataval={setDataval} />
                    </div>
                    <div className="main-page__movies">
                        <Movies
                        movies={movies} 
                        addFavoriteItem = {addFavoriteItem}
                        />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites 
                    favorites ={favorites}
                    removeFavoriteItem= {removeFavoriteItem} />
                </aside>
               
            </main>
        </div>
    );
}
export default MainPage;