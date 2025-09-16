"use client";

import { Err } from "@/utils/types";
import Link from "next/link";

import React from "react";

const error = ({ error, reset }: Err) => {
  console.log(error.message);

  return (
    <div className="pt-7 text-center">
      <div className="text-3xl  text-red-600 font-semibold">
        Something went Error
      </div>
      <h2 className="text-gray-700 my-3 text-xl">
        The Error Message: {error.message}
      </h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Try again
      </button>
      <div>
        <Link className="text-xl underline text-blue-700 mt-6" href="/">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default error;
