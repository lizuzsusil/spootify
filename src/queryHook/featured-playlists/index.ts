import { useQuery } from "react-query";
import { queryConfig } from "../../utils/reactQueryConfig";
import { apiRequestService } from "../../utils/service/apiRequest";
import { FEATURED_PLAYLISTS_KEY } from "./constants";
import config from '../../config/config';

const { api }:any = config;

const GET_FEATURED_PLAYLISTS_TYPE = api.baseUrl + "/browse/featured-playlists";

export const FeaturedPlaylistsTypeList = () => {
    const response = useQuery(
      [FEATURED_PLAYLISTS_KEY],
      () => apiRequestService.apiRequest(GET_FEATURED_PLAYLISTS_TYPE),
      queryConfig
      )
      
      return response;
    };
