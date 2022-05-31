import React, { useReducer, useState, Component } from 'react';
import './Favorites.css';
import { initialState, reducer } from '../../cases';
import { Link } from "react-router-dom";

const Favorites = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [text, setText] = useState("");
    const [showlink, setLink] = useState(false);
    const [listId, setId] = useState("");

    // const checkDisabled=(e)=>{
    //     console.log(e.target.disabled);
    // }
    const TextChange = (e) => {
        setText(e.target.value)

    }
    const getListId = (idList) => {
        dispatch({
            type: 'GET_ID',
            payload: {
                listId: idList,
            }
        })
    }
    const saveFavList = (title, movies) => {
        // for(var i in movies){
        let data = { title: text, movies: [] }
        for (let i = 0; i < props.favorites.length; i++) {
            data.movies.push(props.favorites[i].imdbID)
        }

        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                let listId = data.id;
                setId(listId);
            })
        // console.log(data)
        if (props.favorites.length !== 0) {
            setLink({ showLink: false });
        } else {
            setLink({ showLink: true })
        };
    };


    return (
        <div className="favorites">
            <input
            type='text'
                value={text}
                onChange={(e) => TextChange(e)}
                className="favorites__name"
                placeholder='Новый список' />
            <ul className="favorites__list">
                {props.favorites.map((item) => {
                    console.log(item)
                    return <li key={item.imdbID}>{item.Title} ({item.Year})
                        <button onClick={() => props.removeFavoriteItem(item)} ><strong>X</strong></button>
                    </li>;
                })}
            </ul>
            <button type="button" className={props.showLink ? 'favorites__save' : 'favorites__save-none'} disabled={!text}
                onClick={() => saveFavList()} >Save</button>
            <div className={props.showLink ? 'favorites-link' : ''}>
                {showlink && <Link to={`/list/${listId}`}>Go to list page</Link>}
            </div>
        </div>
    );
}

export default Favorites
