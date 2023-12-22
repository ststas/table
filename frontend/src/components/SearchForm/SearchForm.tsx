import './SearchForm.css';
import { FC, useContext } from 'react';
import { ReactComponent as Icon } from '../../assets/icons/search.svg';
import { GeneralContext } from '../../contexts/GeneralContext';

export const SearchForm: FC = () => {
  const { dataLength, setSearchText, searchText } = useContext(GeneralContext);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const counterText =
    dataLength === 1 ? `${dataLength} test` : `${dataLength} tests`;

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button type="submit" className="search-form__button">
        <Icon className="search-form__button-icon" />
      </button>
      <input
        type="text"
        className="search-form__input"
        placeholder="What test are you looking for?"
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      />
      <p className="search-form__counter">{dataLength >= 0 && counterText}</p>
    </form>
  );
};
