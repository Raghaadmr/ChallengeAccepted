import Head from "next/head";
import Link from "next/link";

const Signin = () => {
  return (
    <div>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Signin</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded  focus:outline-none my-1"
            >
              Signin
            </button>
            <p className="my-2">
              you dont have an acount?
              <Link href="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
