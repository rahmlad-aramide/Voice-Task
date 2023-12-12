import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import signInImage from '../../assets/images/signin-img.png'
import bottomWave from '../../assets/images/bottom-wave.svg'
import { builder } from '../../api/builder';
import { useMutation } from '@tanstack/react-query';
import { error, notify } from '../../utils/toast';
import { Loader } from '../../utils';
import { cookieStorage } from '@ibnlanre/portal';
import { ToastContainer } from 'react-toastify';

const defaultFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState(defaultFields)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFields({
      ...fields,
      [name]: value
    })
  }
  // Login mutation function
  const { mutate, isPending } = useMutation({
    // mutationKey: builder.auth.signup.get(),
    mutationFn: builder.use().auth.signin,
    onSuccess(response) {
      cookieStorage.setItem('token', response.data.token)
      console.log(response);
      notify("Successful! You're being redirected");
      setFields(defaultFields);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError(err) {
      console.log("Error while logging you in:", err);
      error(`Error: ${err.response.data.message}`);
    },
  });

  return (
    <div className="relative h-full md:h-screen">
      <ToastContainer />
      <div className="w-[90%] max-w-[1200px] mx-auto h-full">
        <h1 className="text-[26px] text-primary font-medium pt-4 md:py-5">
          <Link to="/">
            Voice Task
          </Link>
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center h-[calc(100%_-_170px)]">
          <div className="order-1 md:order-0 py-4 md:my-0 w-full md:w-1/2 overflow-y-auto h-full">
            <h2 className="text-teal-950 text-[25px] mb-8 md:my-4 text-center md:text-left">Login to your account</h2>
            <form onSubmit={
              (e) => {
                e.preventDefault();
                console.log(fields)
                mutate(fields)
              }
            }
              className="flex flex-col md:ml-0 gap-6 p-6 rounded-lg bg-[#e8b8ff26] w-full max-w-[90%] mx-auto"
            >
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm text-black/80">Email</label>
                <input type="email" id="email"
                  placeholder="Enter your email address here"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  className="border border-[#4a4a4733] rounded px-4 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-2 text-sm text-black/80">Password</label>
                <input type="password" id="password"
                  placeholder="Create your new password"
                  name="password"
                  value={fields.password}
                  onChange={handleChange}
                  className="border border-[#4a4a4733] rounded px-4 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
              <Link to="/" className="text-sm text-primary">
                Forgot password?
              </Link>
              <button
                type='submit'
                disabled={isPending}
              className="bg-primary hover:bg-transparent disabled:scale-100 disabled:hover:bg-primary border border-primary text-white hover:text-primary active:scale-90 transition duration-200 font-medium p-2 rounded">
              {isPending ? <Loader /> : "Signin"}
              </button>
              <div className="text-sm text-black/70 text-center">
                Don&lsquo;t have an account?{" "}
                <Link to="/register" className="hover:underline text-primary/90 font-medium">
                  Signup
                </Link>
              </div>
            </form>
          </div>
          <div className="flex order-0 md:order-1">
            <div>
              <img src={signInImage} alt="#" className="max-h-[470px] mt-10" />
            </div>
          </div>
        </div>
        <img src={bottomWave} className="w-full absolute left-0 bottom-0 -z-10" />
      </div>
    </div>
  )
}

export default SignIn