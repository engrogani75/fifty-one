import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvdier";
import { Navigate } from "react-router-dom";


const PrivateOrder = ({children}) => {

    const {user, loader} = useContext(AuthContext)

  if (loader) {
    return  <><button type="button" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[3.375rem] w-[3.375rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800">
    <span className="sr-only">Loading...</span>
    <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
      <span className="sr-only">Loading...</span>
    </span>
  </button>
  <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
    <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
    Loading
  </button></>
     
    
  }

    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateOrder;