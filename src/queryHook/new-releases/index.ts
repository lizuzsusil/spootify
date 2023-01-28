import { useQuery } from "react-query";
import { queryConfig } from "../../utils/reactQueryConfig";
import { apiRequestService } from "../../utils/service/apiRequest";
import { NEW_RELEASES_KEY } from "./constants";
import config from '../../config/config';

const { api }:any = config;

const GET_NEW_RELEASES_TYPE = api.baseUrl + "/browse/new-releases";

export const NewReleasesTypeList = () => {
    const response = useQuery(
      [NEW_RELEASES_KEY],
      () => apiRequestService.apiRequest(GET_NEW_RELEASES_TYPE),
      queryConfig
      )
      
      return response;
    };
