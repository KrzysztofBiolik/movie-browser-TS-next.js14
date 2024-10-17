import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3f7fc9c72e59bba6e2321914c19c0c85";

type fetchApiParameters = {
    path: string;
    parameters?: {
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

    const urlSearchParams = new URLSearchParams(allParameters).toString();

    const response: Data = await axios.get(`${API_URL}${path}?${urlSearchParams}`)

    return await response;

};