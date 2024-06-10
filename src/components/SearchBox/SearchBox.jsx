import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setStatusFilter } from "../../redux/filters/slice.js";

const SearchBox = () => {
  const finedId = useId();
  const dispatch = useDispatch();
  const filterQuery = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const query = e.target.value.trim();
    dispatch(setStatusFilter(query));
  };
  return (
    <div className={css.filter}>
      <label htmlFor={finedId}>Find contacts by name</label>
      <input
        className={css.filterInput}
        id={finedId}
        type="text"
        value={filterQuery}
        onChange={handleFilter}
        name="name"
      />
    </div>
  );
};
export default SearchBox;
