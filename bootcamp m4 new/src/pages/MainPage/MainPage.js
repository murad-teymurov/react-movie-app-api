import React, {  useEffect, useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [dataval, setDataval] = useState('');
    const [favorites, setFavorites] = useState([])

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
        setFavorites(newFavorites);
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
                        <SearchBox searchValue={searchValue} setSearchValue ={setSearchValue} dataval={dataval} setDataval={setDataval}/>
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