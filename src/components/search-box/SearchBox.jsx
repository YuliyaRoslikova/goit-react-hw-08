import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find contact by name</p>
      <input className={css.input} type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
