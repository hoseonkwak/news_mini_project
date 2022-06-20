import Header from './components/Header';
import Footer from './components/Footer';
import Clip from './components/Clip';
import ResultContainer from './components/ResultContainer';
import { useEffect, useState } from 'react';
import getArticles from './api/getArticles';
import EmptyResult from './components/EmptyResult';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    // console.log('1',query);
    // console.log('2',data.length===0);
    if(query === ""){ // 검색어가 없으면 종료
      return;
    }else{
      const call = async () => {
        const data = await getArticles({
          q: query, // 검색어
          page: page,
        });
        if(page === 1){
          setData(data);
        } else{
          setData((prevData) => ([
            ...prevData, ...data
          ]));
        }
      }
      call();
    }
  }, [query, page]);

  // 새로운 검색어 검색 시
  useEffect(() => {
    // console.log('query변경시!!');
    setPage(1);
  },[query]);

  return (
    <>
      <Header setQuery={setQuery} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={data.length !== 0 ? <ResultContainer data={data} setPage={setPage} /> : <EmptyResult />} />
          <Route path="/clip" element={<Clip />} />
          <Route path="*" element={<Navigate to="/" replace={false} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
