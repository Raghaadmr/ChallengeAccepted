import React from "react";
import Link from "next/link";
import { useRouter, useContext } from "next/router";
import { DataContext } from "../store/GlobalState";

function NavBar() {
  const router = useRouter();
  //const { state, dispatch } = useContext(DataContext);
  // const { auth, cart } = state;
  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div
                  className={
                    "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" +
                    isActive("/cart")
                  }
                >
                  <Link href="/cart">
                    {/* <span>{cart.length}</span> */}
                    Cart
                  </Link>
                </div>

                <div
                  className={
                    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" +
                    isActive("/signin")
                  }
                >
                  <Link href="/signin">Signin</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
