import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <div className="max-w-[400px] mx-auto bg-white p-5 mt-10 text-center">
      <h1 className="text-black text-3xl mb-3">ThankYou</h1>
      <Link href={"/"}>
      <button className="border border-black px-4 py-2 text-black">Back to Home Page</button>
      </Link>
    </div>
  );
};

export default ThankYou;
