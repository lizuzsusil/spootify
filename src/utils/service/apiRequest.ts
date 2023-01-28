import axios from "axios";
import config from '../../config/config';

const { api }:any = config;

export const apiRequestService = {
  apiRequest: async (REQUEST_URL: any) => {
    const {data: {access_token: token}}: any = await axios.post(
      api.authUrl,
      new URLSearchParams({ 'grant_type': 'client_credentials' }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: 'Basic ' + btoa(api.clientId + ':' + api.clientSecret),
        },
      }
      )
      .catch((err) => console.log());

    const response: any = await axios
      .get(`${REQUEST_URL}`, {headers: { Authorization: `Bearer ${token}` }})
      .catch((err) => console.log(err.message));
    return response?.data;
  },
};
