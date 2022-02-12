import axios from "axios";

export const getBreeds = async () => {
  try {
    const r = await axios.get("http://localhost:8888/posts");
    console.log(r);
  } catch (error) {
    console.error(error);
  }
};
