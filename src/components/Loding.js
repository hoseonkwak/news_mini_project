import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LoadingIcon } from '../asset/loading.svg';

const LoadingWrap = styled.div`
  width: 100%;
  margin: 20px auto;
`;
function Loding() {
  return (
    <LoadingWrap>
      <LoadingIcon width={30} height={30} />
    </LoadingWrap>
  )
}

export default Loding;