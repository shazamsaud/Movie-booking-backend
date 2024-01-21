




import axios from "axios";


  
export const getAllMovies = async () => {
  const res = await 
  axios.get('/movie')
    .catch((err) => console.log(err));


  const data = await res.data;
  return data;
};



export const sendUserAuthReq = async (data, signup) => {
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    })
  .catch((err)=>console.log(err))
  const resData = await res.data;
  return resData;
}