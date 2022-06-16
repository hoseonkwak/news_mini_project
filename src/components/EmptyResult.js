import styled from 'styled-components';

const EmptyResultContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px 0;
  line-height: 1.3;
  color: #000;
`;

const EmptyResult = () => {
  return (
    <EmptyResultContainer>
        <h2>Hi!</h2>
        검색어를 입력해주세요.
    </EmptyResultContainer>
    );
};

export default EmptyResult;