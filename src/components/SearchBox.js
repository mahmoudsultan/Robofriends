import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc pa2">
      <input
        onChange={searchChange}
        className="pa3 mb5 input-box search-box ba"
        type="search"
        placeholder='Search Robots..' />
    </div>
  );
};

export default SearchBox;
