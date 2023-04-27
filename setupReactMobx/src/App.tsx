import { RouterProvider } from "react-router-dom";
import router from "./Router"; 
import { StoreProvider } from "@/providers/store/storeProvider";
import { ToastContainer } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { ModalProvider } from "react-modal-hook";

import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';
import "./styles/globals.scss";
import "./App.css";

library.add(faCheckSquare, faCoffee)

export default function App() {
  return (
    <div className="App">
      <StoreProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </StoreProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Tooltip id="app-tooltip" />
    </div>
  );
}
