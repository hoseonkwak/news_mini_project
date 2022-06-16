import { useState, useEffect } from 'react';
import styled from 'styled-components'
import getArticles from '../api/getArticles';
import Loading from './Loading';

const Container = styled.div`
  max-width: 1830px;
  margin: 8px auto;
`;

const ResultContainer = () => {
  const [data, setData] = useState({

  });
  useEffect(() => {
    const call = async () => {
      const data = await getArticles();
      setData(data);
      console.log(data);
    }
    call();
  }, [])

  return (
    <>
      <Container>
        <Loading />
      </Container>
    </>
  )
}

export default ResultContainer;