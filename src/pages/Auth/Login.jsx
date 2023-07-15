import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import {AiFillEye,AiFillEyeInvisible} from '../../Utils/icons'

export default function Login() {
  const { loginHandler } = useAuth();
  const [loginCreds, setLoginCreds] = useState({
    email: '',
    password: '',
    showPassword: false
  });
  const GuestLoginCred = {
    email: 'adarshbalika@gmail.com',
    password: 'adarshbalika'
  };

  const { email, password, showPassword } = loginCreds; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setLoginCreds({ ...loginCreds, email: e.target.value })} 
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 pr-10"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setLoginCreds({ ...loginCreds, password: e.target.value })} 
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setLoginCreds({ ...loginCreds, showPassword: !showPassword })} 
            >
              {loginCreds.showPassword ? (
                <AiFillEye/>
              ) : (
                <AiFillEyeInvisible/>
              )}
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={()=>loginHandler(loginCreds.email, loginCreds.password)}
        >
          Login
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline w-full"
          onClick={() => loginHandler(GuestLoginCred.email, GuestLoginCred.password)}
        >
          Login as Guest
        </button>
        <p className="mt-4 text-center">
          Not registered?{" "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
