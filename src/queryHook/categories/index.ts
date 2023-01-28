import { useQuery } from "react-query";
import { queryConfig } from "../../utils/reactQueryConfig";
import { apiRequestService } from "../../utils/service/apiRequest";
import { CATEGORIES_KEY } from "./constants";
import config from '../../config/config';

const { api }:any = config;

const GET_CATEGORIES_TYPE = api.baseUrl + "/browse/categories";

export const CategoryTypeList = () => {
    const response = useQuery(
      [CATEGORIES_KEY],
      () => apiRequestService.apiRequest(GET_CATEGORIES_TYPE),
      queryConfig
      )
      
      return response;
    };
