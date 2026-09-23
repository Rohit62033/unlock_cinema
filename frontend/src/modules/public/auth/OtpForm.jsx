import { resendOtp, verifyOtp } from "@/store/auth/authThunks";
import { maskEmail } from "@/util/maskEmail";
import { Loader2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "sonner";

const OtpForm = ({ onSuccess, formData, onBack }) => {

  const dispatch = useDispatch();
  const inputsRef = useRef([])

  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(timer === 0)

  const { loading } = useSelector((state) => state.auth)


  useEffect(() => {
    if (timer === 0) {
      setCanResend(true)

      return
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  const handleChange = (value, index) => {

    if (!/^\d?$/.test(value)) return

    const updateOtp = [...otp]
    updateOtp[index] = value
    setOtp(updateOtp)

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus()
    }
  }

  const handleResend = async () => {
    const email = formData.email


    const res = await dispatch(
      resendOtp({ email })
    );

    if (resendOtp.fulfilled.match(res)) {
      toast.success("OTP resend successfully");
      
      setTimer(30);
      setCanResend(false);
    } else {
      toast.error(res.payload || "resend falied");

    }
  }

  const handleVerify = async () => {

    const email = formData.email
    const otpString = otp.join('')

    const res = await dispatch(
      verifyOtp({ email, otp: otpString })
    );

    console.log(verifyOtp.fulfilled.match(res));


    if (verifyOtp.fulfilled.match(res)) {

      toast.success("Account created");
      onSuccess();
    } else {
      toast.error(res.payload || "verification falied");

    }
  };

  return (
    <div className="flex flex-col gap-4  ">

      <div>
        <button
          onClick={onBack}
        >
          <FaChevronLeft className="text-gray-500" />
        </button>
      </div>

      <div>
        <h2 className="text-xl text-gray-800 font-bold">Verify your Email Address</h2>

        <p className="text-sm text-gray-500 mt-1">Enter OTP sent to <span>{maskEmail(formData.email)}</span></p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVerify()
        }
        }
      >
        {/* OTP input */}

        <div className='flex justify-center gap-3 mb-6 mt-6'>
          {
            otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className=" w-12 h-12 rounded-xl border border-gray-300 text-center text-lg font-semibold focus:outline-none"
              />
            ))
          }
        </div>



        <button
          // Corrected: join the array first, then check total length
          disabled={otp.join("").length !== 6 || loading}
          type="submit"
          className="bg-[#DC3548] w-full text-white py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-opacity mt-8"
        >
          {loading ? (
            <div className='flex flex-row justify-center items-center gap-2'>
              <Loader2 className='w-5 h-5 animate-spin' />
              <p className='text-center'>Verifying code</p>
            </div>
          ) : (
            <p className='text-center'>Verify & Create Account</p>
          )}
        </button>
      </form>
      <p className='text-center text-gray-400'>
        {
          canResend ? (
            <button
              onClick={handleResend}
              className='text-blue-500 font-medium hover:cursor-pointer'
            >
              Resend code
            </button>
          ) : (
            <>
              Resend code in{" "}
              <span className="text-gray-600 font-medium">
                00:{timer.toString().padStart(2, "0")}
              </span>
            </>
          )
        }
      </p>

    </div>
  );
};

export default OtpForm;