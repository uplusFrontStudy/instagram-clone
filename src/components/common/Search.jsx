import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const Search = ({ onSearch, onShowModal }) => {

    const inputRef = useRef();

    const onSearchKeyword = (event) => {
        event.preventDefault();
        const keyword = inputRef.current.value;
        onSearch(keyword);
    }

    const onFocusIn = (event) => {
        event.preventDefault();
        onShowModal();
    }

    return (<SearchInput type="text" placeholder="검색" ref={inputRef} onChange={onSearchKeyword} onFocus={onFocusIn}/>);
}

export default Search;

const SearchInput = styled.input`
    width: 215px;
    height: 28px;
    font-size: 14px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    padding: 3px 10px 3px 26px;
`;