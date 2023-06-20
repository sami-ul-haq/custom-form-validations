"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useForm = (validations) => {
  const router = useRouter();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(validations(values));

    if (Object.keys(error).length !== 0) {
      console.log("Error Run");
      return;
    }

    if (Object.keys(error).length === 0 && error !== "") {
      console.log("No Error");
      router.push("/thank-you");
    }
  };

  return { values, handleChange, error, handleSubmit };
};
