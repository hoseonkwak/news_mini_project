import request from "./request";

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const defaultParam = {
  "api-key" : process.env.REACT_APP_NTNEWS,
}

const getArticles = async (paramObj) => {
  console.log('3', paramObj);
  const params = new URLSearchParams({...defaultParam, ...paramObj}).toString();
  const result = await request(`${BASE_URL}/?${params}`);
  return result;
}

export default getArticles;