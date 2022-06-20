import { useEffect, useRef } from 'react';
import styled from 'styled-components'
import EmptyResult from './EmptyResult';
import NewsItem from './NewsItem';
import { ReactComponent as LoadingIcon } from '../asset/loading.svg';

const Container = styled.div`
  max-width: 1830px;
  margin: 8px auto;
`;
const UlArticleWrap = styled.ul`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const LiArticleList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 420px;
  box-sizing: border-box;
  width: 23%;
  flex-direction: column;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 30%);
  margin: 0 10px 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all .3s ease;
  &:hover{
    transform: translateY(-2px);
    box-shadow: 0 2px 7px 0 rgb(0 0 0 / 30%);
  }
`;
const LoadingWrap = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const ResultContainer = ({data, setPage}) => {
  const target = useRef(null);

  const callnews = ([entries]) => {
    if(entries.isIntersecting){
      console.log('검색중...');
      setPage((prev) => prev + 1);
    }
  }
  useEffect( ()=> {
    const observer = new IntersectionObserver(callnews, {
      threshold: 1,
    });
    observer.observe(target.current);
  }, [])

  return (
    <>
      <Container>
        <UlArticleWrap className="articleWrap">
          {data.length > 0 ? data.map((article, idx) => (
            <LiArticleList key={article._id}>
              <NewsItem article={article} idx={idx} />
            </LiArticleList>
          )): <EmptyResult/>}
        </UlArticleWrap>
        <LoadingWrap ref={target}>
          <LoadingIcon width={30} height={30} />
        </LoadingWrap>
      </Container>
    </>
  )
}

export default ResultContainer;