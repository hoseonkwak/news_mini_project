import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ResultContainer from './components/ResultContainer';
import { useEffect, useState } from 'react';
import getArticles from './api/getArticles';
import EmptyResult from './components/EmptyResult';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log('1',query);
    console.log('2',data.length===0);
    if(query === ""){ // 검색어가 없으면 종료
      return;
    }else{
      const call = async () => {
        const data = await getArticles({
          q: query, // 검색어
        });
        setData(data);
        console.log(data);
        console.log(query);
      }
      call();
    }
  }, [query])
  return (
    <>
      <Header setQuery={setQuery} />
      {data.length !== 0 ? <ResultContainer data={data} /> : <EmptyResult />}
      
      <Footer />
    </>
  );
}

export default App;
