import axios, {AxiosResponse} from "axios";

export const RequestAPI = {
   post: (value: boolean) => {
      return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,  {success: value})
   }
}

type RequestType = {
   success: boolean
}