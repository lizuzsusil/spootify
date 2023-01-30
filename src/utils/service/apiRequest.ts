import axios from "axios";
import config from '../../config/config';

const { api }:any = config;

export const apiRequestService = {
  apiRequest: async (REQUEST_URL: any) => {
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

    const response: any = await axios
      .get(`${REQUEST_URL}`, {headers: { Authorization: `Bearer ${accessToken}` }})
      .catch((err) => console.log(err.message));
    return response?.data;
  },
};
