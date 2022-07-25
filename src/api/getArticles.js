import request from "./request";

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const defaultParam = {
  "api-key" : process.env.REACT_APP_NTNEWS,
}

const getArticles = async (paramObj) => {
  const params = new URLSearchParams({...defaultParam, ...paramObj}).toString();
  console.log('params', params);
  const result = await request(`${BASE_URL}/?${params}`);
  console.log(result);
  return result;
}

export default getArticles;

