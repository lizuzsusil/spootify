import axios from 'axios';
import config from '../config';

const { api } = config;

async function getApiData(path,itemType){
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

      const resp = await axios.get(
        `${api.baseUrl}/browse/${path}`,
          {headers: { Authorization: `Bearer ${response.data.access_token}` }}
      )
      
      return resp?.data[itemType]?.items;
    } 
    catch (error) {
      console.log("error =>", error.message)
    }
}

export default getApiData;