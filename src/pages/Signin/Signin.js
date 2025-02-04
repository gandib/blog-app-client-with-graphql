import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";

const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      userError
      token
    }
  }
`;

const Signin = () => {
  const [signin, { data, loading, error }] = useMutation(SIGNIN);
  const [userError, setUserError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    // console.log("data: ", data);
    signin({
      variables: data,
    });
  };

  useEffect(() => {
    if (data && data?.signin?.token) {
      localStorage.setItem("token", data.signin.token);
    } else {
      setUserError(data?.signin?.userError);
    }
  }, [data]);

  console.log(data);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <div className="form">
      <form onSubmit={handleRegister}>
        <label htmlFor="">Your Email</label>
        <input name="email" type="email" />
        <label htmlFor="">Your Password</label>
        <input name="password" type="password" />
        {userError && <p className="text-red-500">{userError}</p>}
        <button type="submit" className="rounded-full p-2 bg-white text-black">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
