import { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import { Search } from './Search';
import { useCharacters } from '../hooks/useCharacter';

const initialState = {
  favoriteCharacter: [],
};

const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favoriteCharacter: [...state.favoriteCharacter, action.payload],
      };
    case 'DELETE_TO_FAVORITES':
      return {
        ...state,
        favoriteCharacter: [
          ...state.favoriteCharacter.filter(
            (item) => item.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};

export const Characters = () => {
  // const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState(' ');
  const searchInput = useRef(null);

  // const getCharacters = async () => {
  //   const response = await fetch('https://rickandmortyapi.com/api/character/');
  //   const data = await response.json();
  //   const results = data.results;
  //   setCharacters(results);
  //   console.log('results ->', results);
  // };

  // useEffect(() => {
  //   getCharacters();
  // }, []);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };
  const handleClickDeleteFavorite = (character) => {
    dispatch({ type: 'DELETE_TO_search', setSearch: character });
  };
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };
  // Usando useCallback
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);
  const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='characters'>
      {favorites.favoriteCharacter.map((favorite) => (
        <div className='characters-item--favorite' key={favorite.id}>
          <figure>
            <img
              className='characters-image--favorite'
              src={favorite.image}
              alt=''
            />
            <figcaption>
              <h2 className='characters-name'>{favorite.name}</h2>
            </figcaption>
            <button
              className='btn-favorite btn-delete'
              type='button'
              onClick={() => handleClickDeleteFavorite(favorite)}
            >
              <b>Delete to Favorites</b>
            </button>
          </figure>
        </div>
      ))}
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredUsers.map((character) => (
        <div className='characters-item' key={character.id}>
          <figure>
            <img className='characters-image' src={character.image} alt='' />
            <figcaption>
              <h2 className='characters-name'>{character.name}</h2>
              <br />
              <p>
                <b>Gender: </b>
                {'  '}
                {`${character.gender} ${
                  character.gender === 'Male'
                    ? '♂️'
                    : character.gender === 'Female'
                    ? '♀️'
                    : ' '
                } `}
              </p>
              <p>
                <b>Origin: </b> {character.origin.name}
              </p>
              <p>
                <b>Location: </b> {character.location.name}
              </p>
              <p>
                <b>Specie: </b> {character.species}
              </p>
              <p>
                <b>Status: </b> {character.status}
              </p>
            </figcaption>
          </figure>
          <button
            className='btn-favorite'
            type='submit'
            onClick={() => handleClick(character)}
          >
            <b>Add to Favorites</b>
          </button>
        </div>
      ))}
    </div>
  );
};
