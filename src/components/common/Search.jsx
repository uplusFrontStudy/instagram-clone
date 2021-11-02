import React from 'react';
import { useRef } from 'react';

const Search = () => {

    const inputRef = useRef();

    return (<input type="text" placeholder="검색어를 입력...."/>);
}

export default Search;