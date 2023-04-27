import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";

import Root from "./pages/Root";
import Login from "./pages/Login";
import Patients from "./pages/Patients";
  
export const ROUTES = {
  LANDING: '/',
  LOGIN: '/sign-in',
  PATIENTS: '/patients'
}
  
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path={ROUTES.LANDING} element={<Root />} />,
    <Route path={ROUTES.LOGIN} element={<Login />} />,
    <Route path={ROUTES.PATIENTS} element={<Patients />} />
  ])
);

export default router;