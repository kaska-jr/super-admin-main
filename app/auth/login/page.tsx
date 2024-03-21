"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { login } from '../../redux/features/auth-slice';
import { RootState } from '../../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';
import { FiEye ,FiEyeOff} from "react-icons/fi";


interface FormData {
  email: string;
  password: string;
}
interface ApiResponse {
  message: string;
  // Add other properties if present in the response data
}

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [sessionId, setSessionId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const [isSigningIn, setSigningIn] = useState(false); // Track loading state
  const [isSigningInG, setSigningInG] = useState(false); // Track loading state

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };
  
  const handleLoginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSigningIn) {
      return;
    }

    setSigningIn(true);

    try {
      const response: AxiosResponse = await axios.post(
        `http://localhost:5000/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const data = response.data;
        const merchant = data.merchant
        const token = data.token
        dispatch(login({ userInfo: data.merchant }) as any);
        toast.success('Login successful!', { type: 'success' });
        if(merchant.username){
            console.log(token)

        }else{
          console.log("merchant")
          console.log(token)

        }
      } else {
        // Handle other error codes if needed
        const errorData = response.data.message;
        toast(errorData, { type: 'error' });
        console.log(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response && axiosError.response.status === 400) {
          // Cast the response.data to the expected interface
          const responseData = axiosError.response.data as ApiResponse;
          const errorMessage = responseData.message || 'Invalid Credentials';
          toast(errorMessage);
          console.error('Unauthorized Error:', errorMessage);
        } else {
          // Handle other errors
          toast('Something went wrong', { type: 'error' });
          console.error('An error occurred:', axiosError);
        }
      } else {
        // Handle non-Axios errors if necessary
        toast('Something went wrong', { type: 'error' });
        console.error('An error occurred:', error);
      }
    } finally {
      setSigningIn(false);
    }
  };

  useEffect(() => {
    if (error) {
      toast(error, { type: 'error' });
    }
  }, [error]);

  return (
    <>
      <ToastContainer theme="light" className="toastify" />

      <main className="w-full flex">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-black lg:flex" style={{background:"black"}}>
          <div className="relative z-10 w-full max-w-md">
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
           /** style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
              filter: 'blur(118px)',
            }} */
          ></div>
        </div>
        <div className="flex-1 flex items-center justify-center h-screen sm-mt-0">
          <div className="w-full max-w-md space-y-8 px-4  text-gray-600 sm:px-0">

            <form
              onSubmit={handleLoginFormSubmit}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full mt-2 px-3 py-4 text-gray-500  outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
               
                />
              </div>
              <div>
                    <label className="font-medium">Password</label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handlePasswordChange}
                        className="w-full mt-2 px-3 py-4 pr-8 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FiEyeOff className="text-gray-500 mt-2" />
                        ) : (
                          <FiEye className="text-gray-500 mt-2" />
                        )}
                      </div>
                    </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm font-medium leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="/auth/forgot-password"
                    className="font-semibold text-primary hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full px-4 py-4 text-white font-medium  rounded-lg duration-150 bg-black ${
                  isSigningIn ? 'cursor-wait' : ''
                }`}
                disabled={isSigningIn}
              >
                {isSigningIn ? 'Logging in...' : 'Log in'}
              </button>
            </form>
       
          </div>
        </div>
      </main>
    </>
  );
}
