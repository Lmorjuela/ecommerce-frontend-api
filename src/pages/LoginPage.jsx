import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth.js";
import { Link } from "react-router-dom";
import UserLogin from "../components/Login/UserLogin.jsx";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const { loginUser } = useAuth();

  const onSubmit = (data) => {
    const BASE_URL = import.meta.env.VITE_REACT_APP_URL
    const url = `${BASE_URL}/users/login`;
    loginUser(url, data);
    const user = localStorage.getItem("user");
    if (user) {
      window.location.reload();
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {user ? (
        <UserLogin user={user} />
      ) : (
        <div className="relative top-24 flex flex-col items-center gap-1 ms:gap-2 mm:top-36 mm:gap-4 tp:top-48 tp:col-start-3 tp:col-end-7 tp:row-start-1 tp:row-end-6">
          <h2 className="w-3/4 max-w-[410px] font-serif text-2xl text-stone-800 mm:text-3xl">
            Welcome! Enter your email and password to continue
          </h2>
          <div className="flex w-80 flex-col bg-blue-200 p-4">
            <h4 className="text-center font-serif text-xl font-semibold ">
              Test Data
            </h4>
            <div className="flex items-center gap-2 text-gray-700">
              <i className="bx bx-envelope"></i>
              <span>brandonaguero2004@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <i className="bx bx-lock-alt"></i>
              <span>75552366</span>
            </div>
          </div>
          <form
            className="flex w-3/4 max-w-[410px] flex-col gap-2  mm:gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <label
                className="font-serif text-base text-stone-700 mm:text-xl"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-2 p-1 outline-none focus:shadow-md mm:p-2"
                {...register("email", { required: true })}
                type="email"
                id="email"
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-serif text-base text-stone-700 mm:text-xl"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border-2 p-1 outline-none focus:shadow-md mm:p-2"
                {...register("password", { required: true })}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </div>
            <button className="m-auto w-2/4 max-w-[300px] bg-red-500 p-1 font-serif font-semibold  text-white hover:brightness-110 mm:p-2">
              Login
            </button>
          </form>
          <footer className="flex w-3/4 max-w-[410px] flex-col">
            <h4 className="font-serif text-sm mm:text-base">
              Don't have an account?{" "}
              <Link className="text-blue-400 hover:text-lg" to="/register">
                Sign Up
              </Link>
            </h4>
          </footer>
        </div>
      )}
    </>
  );
};

export default LoginPage;
