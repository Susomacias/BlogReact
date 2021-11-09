import  axios from "axios";
import { LOGIN_ENPOINT } from "../helpers/endpoints";

export const loginUser = (userData) => dispatch => {
    console.log(userData);
  return new Promise ((resolve, reject) => {
      axios.post(LOGIN_ENPOINT, userData, {
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response);
        resolve(response);
      }).catch(error => {
        reject(error);
      });
  });
}