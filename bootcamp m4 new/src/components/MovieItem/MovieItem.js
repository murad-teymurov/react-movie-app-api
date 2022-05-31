import React from 'react';
// import Movies from '../Movies/Movies';
import './MovieItem.css';

const MovieItem =(props) => {
   
        // const { title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={props.movie_props.Poster} alt={props.movie_props.Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{props.movie_props.Title}&nbsp;({props.movie_props.Year})</h3>
                    <button onClick={()=> props.addFavoriteItem(props.movie_props)}  type="button" className="movie-item__add-button" >Add Favorites</button>
                </div>
            </article>
        );
    }

export default MovieItem;