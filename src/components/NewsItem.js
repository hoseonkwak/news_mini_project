import moment from "moment";
import React from "react";
import styled from "styled-components";

const LiThumb = styled.span`
  width: 100%;
  height: 42%;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  a {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImgThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ArticleCont = styled.div`
  width: 100%;
  height: 58%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const H1Title = styled.h1`
  font-size: 18px;
  width: 100%;
  max-height: 72px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const PSnippet = styled.p`
  font-size: 14px;
  margin-top: 0;
  max-height: 76px;
  width: 100%;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const ClipSpan = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 0 10px;
  cursor: pointer;
  display: inline-block;
  width: 32px;
  height: 24px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  background: tomato;
  transition: all .2s ease;
  &:hover{
    box-shadow: 2px 2px 2px 0 rgb(255 0 0 /30%);
    transform: translateY(-2px);
  }
`;
const ArticleDate = styled.span`
  position: absolute;
  right: 6px;
  bottom: 6px;
  font-size: 10px;
  color: #999;
  user-select: none;
`;
// const 

const NewsItem = ({ article, idx }) => {
  const { headline, multimedia, web_url, pub_date, snippet } =
    article;

  const editDate = moment({pub_date}).format('YYYY년 MM월 DD일');
  return (
    <>
      <LiThumb>
        <a href={web_url} target="_blank">
          <ImgThumbnail
            src={
              multimedia?.[idx]?.url
                ? `https://nytimes.com/${multimedia[idx].url}`
                : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
            }
            alt="thumbnail"
          />
        </a>
      </LiThumb>
      <ArticleCont>
        <a href={web_url} target="_blank">
          <H1Title>{headline.main}</H1Title>
        </a>
        <PSnippet>{snippet}</PSnippet>
        <ClipSpan>Clip</ClipSpan>
        <ArticleDate>{editDate}</ArticleDate>
      </ArticleCont>
    </>
  );
};

export default NewsItem;
