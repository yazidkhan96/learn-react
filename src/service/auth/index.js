import axios from "axios"


export const loginService = (data) => {
    return new Promise(async(resolve,reject) => {
      try {
        const res = await axios.post("http://tokoonline.glitch.me/login",{
          email: data.email,
          password: data.password
        })
        resolve(res.data)
      } catch (error) {
        reject(error)
      }
    });
   
  }


  export const registerService = (data) => {
    console.log("data", data);
    return new Promise(async (resolve,reject) => {
      try {
        const res = await axios.post("http://tokoonline.glitch.me/register", {
          name: data.name,
          phone: data.phone,
          email: data.email,
          password: data.password,
        })
        resolve(res.data)
      } catch (error) {
        reject(error)
      }
    })
   
  };
