import { useState, useReducer, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

import {
  validateOnlyString,
  validatePassword,
  validateEmail
} from '../../Utils/inputChecks';

export default function SignUp() {
  const { token,signupHandler } = useAuth();
  const [alertMessage, setAlertMessage] = useState({
    error: false,
    fnameError: '',
    lnameError:'',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    let newAlertMessage = {
      ...alertMessage,
      error: false,
      fnameError: '',
      lnameError:'',
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    };

    if (state.firstName === '') {
      newAlertMessage.error = true;
      newAlertMessage.fnameError = 'First Name can not be empty';
    }

    if (state.lastName === '') {
      newAlertMessage.error = true;
      newAlertMessage.lnameError = 'Last Name can not be empty';
    }

    if (state.email === '') {
      newAlertMessage.error = true;
      newAlertMessage.emailError = 'Email can not be empty';
    }

    if (state.password === '') {
      newAlertMessage.error = true;
      newAlertMessage.passwordError = 'Password can not be empty';
    }

    if (!newAlertMessage.error) {
      signupHandler(state.email, state.password, state.firstName,state.lastName);
    }
    setAlertMessage(newAlertMessage);
  };

  const signupReducer = (state, action) => {
  switch (action.type) {
    case "firstName": {
      state.firstName = action.payload;
      if (!validateOnlyString(action.payload)) {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: true,
          fnameError: "Enter a valid firstName",
        }));
      } else {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: false,
          fnameError: "",
        }));
      }
      return state;
    }
    case "lastName": {
      state.lastName = action.payload;
      if (!validateOnlyString(action.payload)) {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: true,
          lnameError: "Enter a valid lastName",
        }));
      } else {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: false,
          lnameError: "",
        }));
      }
      return state;
    }
    case "email": {
      state.email = action.payload;
      if (!validateEmail(action.payload)) {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: true,
          emailError: "Enter a valid email",
        }));
      } else {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: false,
          emailError: "",
        }));
      }
      return state;
    }
    case "password": {
      state.password = action.payload;

      if (!validatePassword(action.payload)) {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: true,
          passwordError: "Password should be 8-20 characters long",
        }));
      } else {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: false,
          passwordError: "",
        }));
      }
      return state;
    }

    case "confirmPassword": {
      state.confirmPassword = action.payload;
      if (!passwordMatched(state.password, state.confirmPassword)) {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: true,
          confirmPasswordError: "Password and confirm password did not matched",
        }));
      } else {
        setAlertMessage((prevState) => ({
          ...prevState,
          error: false,
          confirmPasswordError: "",
        }));
      }
      return state;
    }
    default:
      return state;
  }
};

  const passwordMatched = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const [state, dispatch] = useReducer(signupReducer, {
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form className="w-80 bg-white shadow-md rounded px-8 py-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${alertMessage.fnameError ? 'border-red-500' : ''}`}
            type="text"
            placeholder="Adarsh"
            required={true}
            value={state.firstName}
            onChange={e => dispatch({ type: 'firstName', payload: e.target.value })}
          />
          {alertMessage?.fnameError && (
            <div className="text-red-500 text-xs mt-1">{alertMessage?.fnameError}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${alertMessage.lnameError ? 'border-red-500' : ''}`}
            type="text"
            placeholder="Balika"
            required={true}
            value={state.lastName}
            onChange={e => dispatch({ type: 'lastName', payload: e.target.value })}
          />
          {alertMessage?.lnameError && (
            <div className="text-red-500 text-xs mt-1">{alertMessage?.lnameError}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${alertMessage.emailError ? 'border-red-500' : ''}`}
            type="text"
            placeholder="adarshbalika"
            required={true}
            value={state.email}
            onChange={e => dispatch({ type: 'email', payload: e.target.value })}
          />
          {alertMessage?.emailError && (
            <div className="text-red-500 text-xs mt-1">{alertMessage?.emailError}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${alertMessage.passwordError ? 'border-red-500' : ''}`}
            type="password"
            required={true}
            value={state.password}
            onChange={e => dispatch({ type: 'password', payload: e.target.value })}
          />
          {alertMessage?.passwordError && (
            <div className="text-red-500 text-xs mt-1">{alertMessage?.passwordError}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${alertMessage.confirmPasswordError ? 'border-red-500' : ''}`}
            type="password"
            required={true}
            value={state.confirmPassword}
            onChange={e => dispatch({ type: 'confirmPassword', payload: e.target.value })}
          />
          {alertMessage?.confirmPasswordError && (
            <div className="text-red-500 text-xs mt-1">{alertMessage?.confirmPasswordError}</div>
          )}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={submitHandler}
        >
          Create New Account
        </button>

        <div className="mt-4">
          <p>Already have an account?</p>
          <Link
            className="text-blue-500 hover:text-blue-700 font-bold"
            to="/login"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
