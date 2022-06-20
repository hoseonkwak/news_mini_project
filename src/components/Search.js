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
`;
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
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #eee; */
`;
const Search = ({ setQuery }) => {
  const savedSearchHistory = localStorage.getItem('searchHistory');
  const initialSearchHis = savedSearchHistory ? JSON.parse(savedSearchHistory) : [];
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState(initialSearchHis);
  const inputRef = useRef(null);

  const updateSearchInput = (value) => {
    inputRef.current.value = value;
  }

  const handleChangeSearch = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };
  // console.log(searchHistory);

  useEffect(() => {
    // console.log(setQuery);
    if (inputValue === "") {
      setQuery("");
    } else {
      const delay = setTimeout(() => {
        console.log('start!! 검색어: ', inputValue);
        setQuery(inputValue);
        //updateSearchInput('');  //검색창 초기화
        // 중복 제거 및 최대 검색어 5개까지
        setSearchHistory((prev) => {
          const overlapDel = new Set([inputValue, ...prev]);
          const overlapDelArr = [...overlapDel];
          console.log(overlapDelArr);
          if(overlapDelArr.length >= 5){
            overlapDelArr.length = 5;
          }
          return overlapDelArr;
        });
      }, 2000);
      return () => {
        clearTimeout(delay);
      };
    }
  }, [inputValue])

  const clickSearch = (history) => {
    // 1. 현재 클릭 된 최근 검색어로 검색
    setQuery(history);
    // 2. 검색창 input 값 업데이트
    updateSearchInput(history);
  }

  const deleteHistory = (idx) => {
    const newSearchHistory = [...searchHistory];
    newSearchHistory.splice(idx, 1);
    setSearchHistory(newSearchHistory);
  }

  // localStorage
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory])

  return (
    <>
      <SerachBoxArea>
        <SearchInputArea>
          <SearchInput placeholder="검색어를 입력하세요" onChange={handleChangeSearch} ref={inputRef} />
        </SearchInputArea>
      </SerachBoxArea>
      <SearchHistoryArea>
        {searchHistory.map((history, idx) => (
          <SearchHIstory 
            key={idx}
            history={history}
            searchHistory={() => {clickSearch(history);}}
            deleteHistory={() => deleteHistory(idx)}
          />
        ))}
      </SearchHistoryArea>
    </>
  )
}

export default Search;