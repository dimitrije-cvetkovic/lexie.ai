import RootLayout from "@/components/layout/LayoutRoot";
import Login from "@/components/login/Login";
import { ROUTES } from "@/Router";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/hooks/useStore";

const LoginPage = observer(() => {
  const navigate = useNavigate();
  const { authStore } = useStore();

  //TODO: da li treba useEffect da se ne rerenda slucajno pre navigacije nakon login-a korisnika
  useEffect(() => {
    if (authStore.token) navigate(ROUTES.PATIENTS)
  }, [authStore.token, navigate])

  return !authStore.token ? (
    <RootLayout>
      <Login />
    </RootLayout>
  ) : <></>
});

export default LoginPage;