import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDisplay } from '../../../../../assets/functions/hooks/hooks';
import { getGenres } from '../../../../../assets/functions/apiFunctions/requestsFunctions';
import { select_genre } from '../../../../../redux/actions/filter_actions/actions';
import { ReactComponent as SelectArrow } from '../../../../../assets/images/SelectArrow.svg';
import './GenreSelect.css';

const GenreSelect = () => {
  const selected_genre = useSelector((state) => state.filter_state.genres);
  const [data, setData] = useState(null);
  const [display, changeDisplay] = useDisplay();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const dispatch = useDispatch();

  function isSelected(genre) {
    return selectedGenres.some((obj) => obj.id === genre.id);
  }

  function handleSelect(genre) {
    const is_selected = isSelected(genre);
    if (is_selected) {
      const delete_genre = selectedGenres.filter((obj) => obj.id !== genre.id);
      setSelectedGenres(delete_genre);
      dispatch(select_genre(delete_genre.map((obj) => obj.id).join(',')));
    } else {
      const add_genre = [...selectedGenres, genre];
      setSelectedGenres(add_genre);
      dispatch(select_genre(add_genre.map((obj) => obj.id).join(',')));
    }
  }

  async function getData() {
    const res = await getGenres();
    setData(res);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="genre_select">
      <p>Genres</p>
      <div className={display ? 'select_active' : ''}>
        {selected_genre.length === 0 ? (
          <p>Select genre</p>
        ) : (
          <p className="selected_genres">{selectedGenres.map((obj) => obj.name).join(', ')}</p>
        )}
        <SelectArrow className="select_arrow" onClick={changeDisplay} />
      </div>
      {display && data && (
        <span>
          <div>
            {data.genres.map((genre) => (
              <p
                className={isSelected(genre) ? 'selected_genre' : ''}
                onClick={() => handleSelect(genre)}
                key={genre.id}
              >
                {genre.name}
              </p>
            ))}
          </div>
        </span>
      )}
    </div>
  );
};

export default GenreSelect;
