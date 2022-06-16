import styled from 'styled-components'

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

const Search = () => {

  return (
    <>
      <SerachBoxArea>
        <SearchInputArea>
          <SearchInput placeholder="검색어를 입력하세요" />
        </SearchInputArea>
      </SerachBoxArea>
      <SearchHistoryArea>

      </SearchHistoryArea>
    </>
  )
}

export default Search