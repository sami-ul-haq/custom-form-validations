export default function validations(values) {
  let error = {};

  if (!values.username.trim()) {
    error.username = "Username Required";
  } else if (values.username.length < 2) {
    error.username = "Username must be more than 2 char";
  }
  if (!values.email.trim()) {
    error.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    error.email = "Invalid Email";
  }
  if (!values.password) {
    error.password = "Password is required";
  } else if (values.password.length < 6) {
    error.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    error.password2 = "Please confirm your passsword ";
  } else if (values.password !== values.password2) {
    error.password2 = "Password doesn't match";
  }

  return error;
}
