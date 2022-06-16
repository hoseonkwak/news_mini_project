import request from "./request";

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const getArticles = async () => {
  const result = await request(`${BASE_URL}/?api-key=${process.env.REACT_APP_NTNEWS}&q=nba`);

  return result;
}

export default getArticles;