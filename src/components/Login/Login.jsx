import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import PhoneInput from "react-phone-input-2";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../../api/loginAuth";
import { Toast } from "primereact/toast";

export const Login = () => {
  const [phone, setPhone] = useState("");

  const toast = useRef(null);

  const navigate = useNavigate();

  const showToast = (severity, summary, detail) => {
    toast.current.show({
      severity,
      summary,
      detail,
      life: 3000,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone) {
      showToast(
        "success",
        "OTP Send",
        "OTP sent to your mobile number!"
      );
      loginAuth(phone).then((data) => {
        navigate("/otp", {
          state: {
            number: phone,
            requestId: data.requestId,
          },
        });
      });
    }
  };

  return (
    <div className="login">
      <div className="main-container">
        <div className="mb-4">
          <span className="text-[2rem] font-medium text-[#5b267e]">
            Sign In
          </span>
          <p className="text-[.7rem]">
            Please enter your mobile number to login. We will send an OTP to
            verify your number.
          </p>
        </div>
        <PhoneInput
          inputProps={{
            required: true,
          }}
          isValid={(value, country) => {
            if (value.length === 0) {
              return false;
            } else {
              return true;
            }
          }}
          country={"in"}
          value={phone}
          onChange={(e) => setPhone(e)}
          className="mb-4 phone-input"
          placeholder="Phone number"
        />
        <div className="flex justify-center items-center">
          <Button
            label="Sign In"
            className="p-button-sm w-[100%] h-[2.5rem] bg-[#5b267e] hover:!bg-[#461864] !border-0"
            onClick={handleSubmit}
          />
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};
