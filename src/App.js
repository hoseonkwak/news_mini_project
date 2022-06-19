import Header from './components/Header';
import Footer from './components/Footer';
import ResultContainer from './components/ResultContainer';
import { useEffect, useState } from 'react';
import getArticles from './api/getArticles';
import EmptyResult from './components/EmptyResult';

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

  useEffect(() => {
    // console.log('query변경시!!');
    setPage(1);
  },[query]);

  return (
    <>
      <Header setQuery={setQuery} />
      {data.length !== 0 ? <ResultContainer data={data} setPage={setPage} /> : <EmptyResult />}
      <Footer />
    </>
  );
}

export default App;
