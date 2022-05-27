import React from 'react';
import './Favorites.css';


const Favorites = (props) => {
    
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {props.favorites.map((item) => {
                        console.log(item)
                        return <li key={item.imdbID}>{item.Title} ({item.Year})
                        <button onClick={() => props.removeFavoriteItem(item)} ><strong>X</strong></button> 
                        </li>;
                    })}
                </ul>
                <button  type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
export default Favorites;