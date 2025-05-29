"use client";

import { submitLogin } from "@/app/action/registerUser";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";

const initialState = {
  error: "",
  success: "",
};

export default function SignUpPage() {
  const [state, formAction] = React.useActionState(submitLogin, initialState);
  const route = useRouter();
  if (state.success) {
    route.push("/");
  }
  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-center text-gray-100">
            Create an Account
          </h1>
          <p className="mt-2 text-center text-gray-200">
            Fill in the information below to get started.
          </p>
        </div>

        {state.error && (
          <p className="text-red-500 text-center">{state.error}</p>
        )}
        {state.success && (
          <p className="text-green-500 text-center">{state.success}</p>
        )}

        <form className="mt-8 space-y-6" action={formAction}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-300"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-300"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
