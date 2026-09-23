import { loginUser } from "@/store/auth/authThunks"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from "lucide-react";
import { closeAuthModal } from "@/store/uiSlice";

const LoginForm = ({ onRegister, onSuccess }) => {
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ email, password });

    if (!email || !password) {
      return toast.error("All fields required")

    }
    console.log({email,password});
    

    const res = await dispatch(loginUser({ email, password }))

    console.log(loginUser.fulfilled.match(res));


    if (loginUser.fulfilled.match(res)) {
      toast.success("Login successful")
      onSuccess()
    } else {

      toast.error(res.payload || "Login falied");
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const isDisabled =
    loading ||
    !email.trim() ||
    !password.trim()

  return (
    <div className="flex flex-col gap-4 ">

      <div className="flex items-center justify-between ">
        <div className="flex-1 text-center">
          <h2 className="text-lg font-bold text-gray-900">Welcome</h2>
        </div>
        <button
          onClick={() => {
            dispatch(closeAuthModal())
          }}
          className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <form
        className="flex flex-col w-full"
        onSubmit={handleLogin}
      >
       

         <div className='mt-5'>
          <label
            className='px-2  font-medium text-gray-500 '
            htmlFor="email"
          >
            Email
          </label>
          <div className='relative mt-2' >
            <Mail
              className='absolute h-5 w-5 left-3 top-[30%] text-gray-400' />
            <input
              className='p-2 border border-gray-300 w-full rounded-lg px-10 py-3'
              placeholder="Enter your email "
              type="email"
              name='email'
              required
               onChange={(e) => setEmail(e.target.value)}
              />
          </div>
        </div>

        {/* Password */}
        <div className='mt-5'>


          <label
            className='px-2  font-medium text-gray-500 '
            htmlFor="password"

          >
            Password
          </label>
          <div className='relative mt-2  ' >
            <LockKeyhole
              className='absolute h-5 w-5 left-3 top-[30%] text-gray-400' />
            {
              showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(false)}
                  className='absolute h-5 w-5 right-3 md:right-5 top-[30%] text-gray-400 cursor-pointer'
                />
              )
                : (
                  <Eye
                    onClick={() => {
                      setShowPassword(true)
                    }}
                    className='absolute h-5 w-5 right-5 top-[30%] text-gray-400 cursor-pointer' />
                )
            }
            <input
              className='p-3 border border-gray-300 w-full rounded-lg px-10 py-3'
              name='password'
              placeholder="Enter your password"
              required
              type={`${showPassword ? "text" : "password"}`}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          disabled={isDisabled}
          type='submit'
          className={`flex gap-1  justify-center items-center text-white py-2.5 mt-6 rounded-md  ${isDisabled ? "bg-primary/70 cursor-not-allowed" : 'bg-primary hover:bg-primary/80 cursor-pointer'}`}
        >
          {loading ? (<Loader2 className='h-5 w-5 animate-spin' />) : ''}
          <span>Sign In</span>
        </button>

      </form>

      {/* Divider */}
      <div className="text-center text-sm text-slate-400">OR</div>

      {/* Google */}
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="flex items-center gap-5 justify-center border border-gray-200 py-2 rounded hover:bg-gray-200">
        <FcGoogle /> Continue with Google
      </button>

      {/* Register */}
      <p className="text-sm text-center">
        New user?{" "}
        <span
          onClick={onRegister}
          className="text-primary cursor-pointer"
        >
          Create account
        </span>
      </p>
    </div>
  )
}

export default LoginForm