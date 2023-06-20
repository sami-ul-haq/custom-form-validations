"use client";
import { useForm } from "@/hooks/useForm";
import validations from "../../utils/validations";

const Form = () => {
  const { values, handleChange, error, handleSubmit } = useForm(validations);

  return (
    <div className="max-w-[400px] mx-auto bg-white p-5 mt-10">
      <h2 className="text-black mb-5 font-bold">
        Get started us with today! Create your account by filling out the
        information below.
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <label
            htmlFor="username"
            className="text-black font-semibold text-sm"
          >
            UserName
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Enter your username..."
            className="border border-sm border-black text-black w-full px-4 py-2 text-sm hover:outline-none"
          />
          {error?.username && (
            <span className="text-red-500 text-sm">{error.username}</span>
          )}
        </div>
        <div className="input-group mb-3">
          <label htmlFor="email" className="text-black font-semibold text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email..."
            className="border border-sm border-black text-black w-full px-4 py-2 text-sm hover:outline-none"
          />
          {error?.email && (
            <span className="text-red-500 text-sm">{error?.email}</span>
          )}
        </div>
        <div className="input-group mb-3">
          <label
            htmlFor="password"
            className="text-black font-semibold text-sm"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password..."
            className="border border-sm border-black text-black w-full px-4 py-2 text-sm hover:outline-none"
          />
          {error?.password && (
            <span className="text-red-500 text-sm">{error?.password}</span>
          )}
        </div>
        <div className="input-group mb-3">
          <label
            htmlFor="password2"
            className="text-black font-semibold text-sm"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            value={values.password2}
            onChange={handleChange}
            placeholder="Confirm your password..."
            className="border border-sm border-black text-black w-full px-4 py-2 text-sm hover:outline-none"
          />
          {error?.password2 && (
            <span className="text-red-500 text-sm">{error?.password2}</span>
          )}
        </div>
        <div className="input-group">
          <button
            type="submit"
            className="border border-black rounded-sm text-black px-4 py-2 font-semibold text-sm hover:bg-black hover:text-white"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
