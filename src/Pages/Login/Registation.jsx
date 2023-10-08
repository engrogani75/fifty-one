import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvdier";

const Registation = () => {

    const {creatUser} = useContext(AuthContext);
    console.log(creatUser);
   

  const registerHandle = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const eamil = e.target.email.value;
    const password = e.target.password.value;


    creatUser(eamil, password)
    .then(res =>{
        console.log(res.user);
    })
    .catch(error =>{
        console.error(error);
    })
    console.log(eamil, password);
  };
  return (
    <div className="w-3/6 mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize text-green-900">
        Please Register here
      </h1>
      <form onSubmit={registerHandle}>
        <div className="mb-4">
          <label
            htmlFor="hs-hero-name-2"
            className="block text-sm font-medium dark:text-white"
          >
            <span className="sr-only">Full name</span>
          </label>
          <input
            type="text"
            id="hs-hero-name-2"
            name="name"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Full name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="hs-hero-email-2"
            className="block text-sm font-medium dark:text-white"
          >
            <span className="sr-only">Email address</span>
          </label>
          <input
            type="email"
            id="hs-hero-email-2"
            name="email"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Email address"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="hs-hero-password-2"
            className="block text-sm font-medium dark:text-white"
          >
            <span className="sr-only">Password</span>
          </label>
          <input
            type="password"
            id="hs-hero-password-2"
            name="password"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Password"
          />
        </div>

        <div className="grid">
          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4"
          >
            Sign up
          </button>
        </div>
      </form>
      <p className="text-xl">
        Already Regiter! Pls go to{" "}
        <Link to={"/login"}>
          <span className="text-xl font-bold text-green-800">LogIn</span>
        </Link>
      </p>
    </div>
  );
};

export default Registation;
