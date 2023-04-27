import RootLayout from "@/components/layout/LayoutRoot";
import { ROUTES } from "@/Router";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/hooks/useStore";
import { useEffect } from "react";

const RootGuardPage = observer(() => {
  const navigate = useNavigate();
  const { authStore } = useStore();

  useEffect(() => {
    if (authStore.token) navigate(ROUTES.PATIENTS)
    else navigate(ROUTES.LOGIN);
  }, [authStore.token, navigate])

  return (
    <RootLayout>
      <div>Welcome</div>
    </RootLayout>
  );
});

export default RootGuardPage;