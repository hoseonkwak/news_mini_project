import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ResultContainer from './components/ResultContainer';
import { useEffect, useRef, useState } from 'react';
import getArticles from './api/getArticles';
import EmptyResult from './components/EmptyResult';
import Loding from './components/Loding';
import styled from 'styled-components';
import { ReactComponent as LoadingIcon } from './asset/loading.svg';

const LoadingWrap = styled.div`
  width: 100%;
  margin: 20px auto;
`;

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const target = useRef(null);

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
        setData(data);
        // console.log(data);
        // console.log(query);
      }
      call();
    }
  }, [query, page])

  // const nextClick = () => {
  //   setPage((prev) => prev + 1);
  // }

  const callback = ([entries]) => {
    if(entries.isIntersecting){
      console.log('fetch');
    }
  }
  useEffect( ()=> {
    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    });
    if(data.length !== 0) {
      observer.observe(target.current);
    }
  }, [data, page])
  return (
    <>
      <Header setQuery={setQuery} />
      {data.length !== 0 ? <ResultContainer data={data} /> : <EmptyResult />}
      {/* <button onClick={nextClick}>next</button> */}
      {data.length !== 0 
      ? <LoadingWrap ref={target}>
          <LoadingIcon width={30} height={30} />
        </LoadingWrap> 
      : ''}
      <Footer />
    </>
  );
}

export default App;
