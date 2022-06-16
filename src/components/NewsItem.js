import React from "react";
import styled from "styled-components";

const LiThumb = styled.span`
  width: 200px;
  height: 150px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ImgThumbnail = styled.img`
  width: 100%;
`;
const ArticleCont = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const H1Title = styled.h1`
  font-size: 18px;
`;
const PAbstract = styled.p`
  font-size: 14px;
`;

const NewsItem = ({ article, idx }) => {
  const { headline, keyword, multimedia, web_url, pub_date, main, abstract } =
    article;
  return (
    <>
      <LiThumb>
        <ImgThumbnail
          src={
            multimedia?.[idx]?.url
              ? `https://nytimes.com/${multimedia[idx].url}`
              : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
          }
          alt="thumbnail"
        />
      </LiThumb>
      <ArticleCont>
        <H1Title>{headline.main}</H1Title>
        <PAbstract>{abstract}</PAbstract>
      </ArticleCont>
    </>
  );
};

export default NewsItem;
