import React, { Component } from 'react';
// import Movies from '../Movies/Movies';
import './MovieItem.css';

class MovieItem extends Component {
    render() {
        // const { title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={this.props.movie_props.Poster} alt={this.props.movie_props.Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{this.props.movie_props.Title}&nbsp;({this.props.movie_props.Year})</h3>
                    <button onClick={()=> this.props.addFavoriteItem(this.props.movie_props)}  type="button" className="movie-item__add-button" >Add Favorites</button>
                </div>
            </article>
        );
    }
}
export default MovieItem;