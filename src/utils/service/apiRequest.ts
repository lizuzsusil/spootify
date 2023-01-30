import axios from "axios";
import config from '../../config/config';

const { api }:any = config;

async function getAccessToken() { 
  if (localStorage.getItem("access_token")) {
    return localStorage.getItem("access_token")
  } 
  try{
    const {data: {access_token: accessToken}} = await axios.post(
      api.authUrl,
      new URLSearchParams({ 'grant_type': 'client_credentials' }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: 'Basic ' + btoa(api.clientId + ':' + api.clientSecret),
        },
      }
      );
    localStorage.setItem("access_token", accessToken)
    return(accessToken);
    } catch (error:any){
      console.log("error =>", error.message)
    }
}


export const apiRequestService = {
  apiRequest: async (REQUEST_URL: any) => {
    let token = await getAccessToken();

    const response: any = await axios
      .get(`${REQUEST_URL}`, {headers: { Authorization: `Bearer ${token}` }})
      .catch((err) => console.log(err.message));
    return response?.data;
  },
};
