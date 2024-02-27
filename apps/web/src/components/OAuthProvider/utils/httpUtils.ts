import axios, { AxiosResponse } from "axios";
import { MAIN_REST_API_SERVER } from "./generalUtils";

export const getApiData = async (endpoint: string, headers: any) => {
  try {
    const res: AxiosResponse = await axios.get(
      `${MAIN_REST_API_SERVER}${endpoint}`,
      {
        headers: {
          ...headers,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const postApiData = async (
  endpoint: string,
  body?: any,
  headers?: any
) => {
  try {
    const res: AxiosResponse = await axios.post(
      `${MAIN_REST_API_SERVER}${endpoint}`,
      body,
      headers
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
