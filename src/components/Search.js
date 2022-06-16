import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components'
import SearchHIstory from './SerachHistory';

const SerachBoxArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInputArea = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const SearchInput = styled.input`
  width: 100%;
  max-width: 800px;
  min-width: 400px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 0 10px;
  border-radius: 5px;
`;

const SearchHistoryArea = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
`;

const Search = ({setQuery}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchTags, setSearchTags] = useState([]);
  const inputRef = useRef(null);

  const handleChangeSearch = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // console.log(setQuery);
    if(inputValue === ""){
      setQuery("");
    } else {
      const delay = setTimeout(() => {
        console.log('start!! 검색어: ',inputValue);
        setQuery(inputValue);
        // handleSearch();

        //inputRef.current.value = '';  //검색창 초기화
        // setSearchTags((prev) => [...prev, inputValue]);
        localStorage.setItem((prev) => ['search', {inputValue}]);
      }, 2000);
      return () => {
        clearTimeout(delay);
      };
    }
  },[inputValue])

  return (
    <>
      <SerachBoxArea>
        <SearchInputArea>
          <SearchInput placeholder="검색어를 입력하세요" onChange={handleChangeSearch} ref={inputRef} />
        </SearchInputArea>
      </SerachBoxArea>
      <SearchHistoryArea>
        <SearchHIstory />
      </SearchHistoryArea>
    </>
  )
}

export default Search;