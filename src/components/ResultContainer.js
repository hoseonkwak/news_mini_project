import { useState, useEffect } from 'react';
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
`;

const LiArticleList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;
const LoadingWrap = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const ResultContainer = ({data}) => {
  return (
    <>
      <Container>
        <UlArticleWrap className="articleWrap">
          {/* {console.log('0',data)} */}
          {data.length > 0 ? data.map((article, idx) => (
            <LiArticleList key={article._id}>
              <NewsItem article={article} idx={idx} />
            </LiArticleList>
          )): <EmptyResult/>}
        </UlArticleWrap>
        {/* <LoadingWrap>
          <LoadingIcon width={30} height={30} />
        </LoadingWrap> */}
      </Container>
    </>
  )
}

export default ResultContainer;