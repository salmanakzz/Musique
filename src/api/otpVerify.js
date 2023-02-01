import axios from "../axios/axios";
import { otpVerifyUrl } from "../urls/urls";

export const otpVerify = async (number, requestId, otp) => {
  try {
    const { data } = await axios.post(otpVerifyUrl, {
      phoneNumber: number,
      requestId: requestId,
      otp: otp,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
