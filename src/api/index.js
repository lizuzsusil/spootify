import axios from 'axios';
import config from '../config';

const { api } = config;

async function getAccessToken() { 
  if (localStorage.getItem("access_token")) {
    return localStorage.getItem("access_token")
  } 
  try{
    const response = await axios.post(
      api.authUrl,
      new URLSearchParams({ 'grant_type': 'client_credentials' }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: 'Basic ' + (Buffer.from(api.clientId + ':' + api.clientSecret).toString('base64')),
        },
      }
      );
    localStorage.setItem("access_token", response.data.access_token)
    return(response.data.access_token);
    } catch (error){
      console.log("error =>", error.message)
    }
}


export default async function getApiData(path,itemType){
  try{
      let token = await getAccessToken();
        
      const resp = await axios.get(
        `${api.baseUrl}/browse/${path}`,
        {headers: { Authorization: `Bearer ${token}` }}
      )
      
      return resp?.data[itemType]?.items;
    } 
      catch (error) {
        console.log("error =>", error.message)
    }
}