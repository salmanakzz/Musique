import { Button } from "primereact/button";
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { otpVerify } from "../../api/otpVerify";
import { Toast } from "primereact/toast";
import { loginAuth } from "../../api/loginAuth";

export const OTPVerify = () => {
  const { state } = useLocation();

  const toast = useRef(null);

  const navigate = useNavigate();

  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");
  const [inp4, setInp4] = useState("");

  const showToast = (severity, summary, detail) => {
    toast.current.show({
      severity,
      summary,
      detail,
      life: 3000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = inp1 + inp2 + inp3 + inp4;

    if (otp.length === 4) {
      otpVerify(state.number, state.requestId, otp).then((data) => {
        if (data?.token && data?.user?.verified) {
          showToast(
            "success",
            "Sign In",
            "Welcome to your home page!"
          );
          navigate("/home");
        } else {
          showToast("error", "Invalid OTP", "Try again or request resent!");
        }
      });
    }
  };

  const resendOtp = () =>{
    showToast(
      "success",
      "OTP Resend",
      "OTP sent to your mobile number!"
    );
    loginAuth(state?.number)
  }

  return (
    <div className="otp-verify">
      <div className="main-container">
        <div className="mb-4">
          <span className="text-[2rem] font-medium text-[#5b267e]">
            OTP Verification
          </span>
          <p className="text-[.7rem]">
            We have sent an otp to {state.number}. Please enter the code
            recieved to verify.
          </p>
        </div>
        <div
          id="otp"
          className="flex flex-row justify-center text-center px-2 mt-5"
        >
          <input
            className="m-2 mx-5 border h-[3.5rem] w-[3.5rem] text-center form-control rounded"
            type="text"
            id="first"
            autoFocus
            maxLength="1"
            value={inp1}
            onChange={(e) => setInp1(e.target.value)}
          />

          <input
            className="m-2 mx-5 border h-[3.5rem] w-[3.5rem] text-center form-control rounded"
            type="text"
            id="first"
            maxLength="1"
            value={inp2}
            onChange={(e) => setInp2(e.target.value)}
          />

          <input
            className="m-2 mx-5 border h-[3.5rem] w-[3.5rem] text-center form-control rounded"
            type="text"
            id="first"
            maxLength="1"
            value={inp3}
            onChange={(e) => setInp3(e.target.value)}
          />

          <input
            className="m-2 mx-5 border h-[3.5rem] w-[3.5rem] text-center form-control rounded"
            type="text"
            id="first"
            maxLength="1"
            value={inp4}
            onChange={(e) => setInp4(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <Button
            label="Verify"
            className="p-button-sm w-[100%] h-[2.5rem] bg-[#5b267e] hover:!bg-[#461864] !border-0"
            onClick={handleSubmit}
          />
        </div>
        <div className="mt-1 flex justify-center items-center">
          <span className="text-[#000000f0] underline cursor-pointer" onClick={resendOtp}>Resend OTP</span>
        </div>
        <div className="flex justify-center items-center">
          <Link className="text-[#000000f0] underline" to={"/"}>Use another number</Link>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};
