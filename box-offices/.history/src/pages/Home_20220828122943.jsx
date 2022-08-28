/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value);
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
    // console.log(ev.keyCode);
  };

  const onRadioChange = ev => {};

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows
          <input id="shows-search" type="radio" value="shows" />
        </label>
        <label htmlFor="actors-search">
          Actors
          <input id="actors-search" type="radio" value="actors" />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
