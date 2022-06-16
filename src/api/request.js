import axios from 'axios'
// api 받기
const request = async (url) => {
  try {
    const response = await axios(url);
    console.log(response);
    if (response.status === 200) {
      const data = await response.data.response.docs;
      console.log(data)
      return data;
    }
  } catch (e) {
    console.log(e)
  }
}

export default request