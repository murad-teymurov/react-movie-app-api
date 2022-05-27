import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {

    render() { 
        // const addFavoriteItem = this.props
        return ( 
            <ul className="movies">
                {this.props.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem 
                        addFavoriteItem ={this.props.addFavoriteItem}
                        movie_props =  {movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;