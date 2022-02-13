import axios from "axios";

const url = "http://localhost:8888";

// test
export const getBreeds = async () => {
  try {
    const r = await axios.get(`${url}/posts`);
    console.log(r);
  } catch (error) {
    console.error(error);
  }
};

// mypage
export const getMyInfo = async () => {
  try {
    const res = await axios.get(`${url}/mypage`);
    return res.data;
  } catch (error) {
    console.error();
  }
};

// graph - 월간
export const getCommitsTotalPerMonth = async (year) => {
  try {
    const res = await axios.get(`${url}/month/${year}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
