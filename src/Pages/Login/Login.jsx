import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvdier";

const Login = () => {
    const navigate = useNavigate();

    const {signInUser} = useContext(AuthContext)
        console.log(signInUser);

    const loginHandle = (e) =>{
        e.preventDefault()
        const eamil = e.target.email.value;
        const password = e.target.password.value;
          
        signInUser(eamil, password)
        .then(res =>{
            console.log(res.user);
            e.target.reset()
            navigate('/')

        })
        .catch(err =>{
            console.error(err);
        })

        console.log(eamil, password);
    }
  return (
    <div className="w-3/6 mx-auto mt-10">
      <h1 className="text-center mb-6 text-3xl text-green-600 capitalize">
        Pls LogIn
      </h1>
      <form onSubmit={loginHandle}>
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
          <a href="">forgot password</a>
        </div>

        <div className="grid">
          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4"
          >
           LogIn
          </button>
        </div>
      </form>
      <p className="text-xl">new user! Pls go to <Link to={"/registation"}><span className="text-xl font-bold text-red-800">Registion</span></Link></p>
    </div>
  );
};

export default Login;
