import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Router/Router';
import AuthProvdier from './provider/AuthProvdier';

import('preline')


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvdier>
      <RouterProvider router={router}/>

    </AuthProvdier>
    
      
 
  </React.StrictMode>
)


