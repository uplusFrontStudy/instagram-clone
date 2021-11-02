import React from 'react';
import Search from '../components/common/Search';
import SearchResultModal from '../components/common/SearchResultModal';
import SerarchResultModal from '../components/common/SearchResultModal';

const SearchContainer = (props) => {
  return (
    <>
      <Search />
      <SearchResultModal visible={false} />
    </>
  );
};

export default SearchContainer;
