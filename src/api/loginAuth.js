import axios from "../axios/axios";
import { loginAuthUrl } from "../urls/urls";

export const loginAuth = async (phone) => {
  try {
    const { data } = await axios.post(loginAuthUrl, {
      phoneNumber: phone,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
