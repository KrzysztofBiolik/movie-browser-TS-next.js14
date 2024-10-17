import { buildQueryString } from "@/common/hooks/buildQueryString";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3f7fc9c72e59bba6e2321914c19c0c85";

type fetchApiParameters = {
    path: string;
    parameters: {
        page?: string;
        query?: string;
    }
}

export async function fetchFromAPI<Data>(
    { path, parameters }: fetchApiParameters
) {
    const defaultParameters = {
        api_key: API_KEY,
    };


    const allParameters = {
        ...defaultParameters,
        ...(parameters || {}),
    };


    const response = await axios.get(`${API_URL}${path}?${buildQueryString(allParameters)}`)
    const responseData: Data = await response.data
    return responseData;

};