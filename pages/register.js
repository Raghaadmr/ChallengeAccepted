import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";

const Register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) console.log(errMsg);

    const res = await postData("auth/register", userData);
    if (res.err) console.log(res);
    return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
  };
  return (
    <div>
      <Head>
        <title>Register </title>
      </Head>
      <form
        className="bg-grey-lighter min-h-screen flex flex-col"
        onSubmit={handleSubmit}
      >
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            Name
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
            Email
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />{" "}
            Password
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            Re-Enter Password
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              id="exampleInputPassword2"
              name="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
            />
            <button
              type="submit"
              className="w-full text-center py-3 r focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link href="/signin">Log in</Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
