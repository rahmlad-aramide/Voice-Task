import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../assets/images/signup-img.png";
import bottomWave from "../../assets/images/bottom-wave.svg";
import { useMutation } from "@tanstack/react-query";
import { builder } from "../../api/builder";
import {
  notify,
  error,
  warn,
} from "../../utils/toast";
import { Loader } from "../../utils";

const defaultFields = {
  name: "",
  username: "",
  password: "",
  email: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState(defaultFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  // Signup
  const { mutate, isPending } = useMutation({
    // mutationKey: builder.auth.signup.get(),
    mutationFn: builder.use().auth.signup,
    onSuccess(data) {
      console.log(data);
      notify("Successful! You're being redirected");
      setFields(defaultFields);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError(err) {
      console.log("Error while logging you in:", err);
      error(`Error: ${err.response.data.message}`);
    },
  });
  // const handleSignup = () => {
  //   if (fields.password !== fields.confirmPassword) {
  //     warn("Password doesn't match!");
  //     return;
  //   }
  //   mutate(fields);
  // };

  return (
    <div className="relative h-full md:h-screen">
      <div className="w-[90%] max-w-[1200px] mx-auto h-full">
        <h1 className="text-[26px] text-primary font-medium pt-4 md:py-5">
          <Link to="/">Voice Task</Link>
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center h-[calc(100%_-_170px)]">
          <div className="order-1 md:order-0 py-4 md:my-0 w-full md:w-1/2 overflow-y-auto h-full">
            <h2 className="text-teal-950 text-[25px] mb-8 md:my-4 text-center md:text-left">
              Signup to get started
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (fields.password !== fields.confirmPassword) {
                  warn("Password doesn't match!");
                  return;
                }
                mutate(fields);
              }}
              className="flex flex-col md:ml-0 gap-6 p-6 rounded-lg bg-[#e8b8ff26] w-full max-w-[90%] mx-auto"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-sm text-black/80">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your fullname here"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  className="border border-[#4a4a4733] rounded px-4 py-2 text-sm outline-none focus:border-primary"
                  min={3}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="mb-2 text-sm text-black/80"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username here"
                  name="username"
                  value={fields.username}
                  onChange={handleChange}
                  className="border border-[#4a4a4733] rounded px-4 py-2 text-sm outline-none focus:border-primary"
                  min={5}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm text-black/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address here"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  className="border border-[#4a4a4733] rounded px-4 py-2 text-sm outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-black/80"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create your new password"
                  name="password"
                  value={fields.password}
                  onChange={handleChange}
                  className="border border-[#4a4a4733] rounded px-4 py-2 text-sm outline-none focus:border-primary"
                  min={4}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 text-sm text-black/80"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your new password"
                  name="confirmPassword"
                  value={fields.confirmPassword}
                  onChange={handleChange}
                  className="border border-[#4a4a4733] rounded px-4 py-2 text-sm outline-none focus:border-primary"
                  min={4}
                  required
                />
              </div>
              <button
                disabled={isPending}
                type="submit"
                className="bg-primary hover:bg-transparent disabled:scale-100 disabled:hover:bg-primary border border-primary text-white hover:text-primary active:scale-90 transition duration-200 font-medium p-2 rounded"
              >
                {isPending ? <Loader /> : "Signup"}
              </button>
              <div className="text-sm text-black/70 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="hover:underline text-primary/90 font-medium"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
          <div className="flex order-0 md:order-1">
            <div>
              <img src={signUpImage} alt="#" className="max-h-[470px] mt-10" />
            </div>
          </div>
        </div>
        <img
          src={bottomWave}
          className="w-full absolute left-0 bottom-0 -z-10"
        />
      </div>
    </div>
  );
};

export default SignUp;
