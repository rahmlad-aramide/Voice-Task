import axios from "axios";
import { baseURL, token } from "./axios-config";
  
export const axiosCalls = async (
  path,
  method,
  data= null,
) => {

  try {
    const config = {
      method,
      url: `${baseURL}${path}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios(config);

    if (response) {
      return response.data;
    }
  } catch (error) {
    if (error?.response?.data?.message === "access denied") {
      return { err: "Access denied, kindly logout and login again" };
    }
    return { err: `An error has occured, ${error?.response?.data?.message}`};
  }
};
