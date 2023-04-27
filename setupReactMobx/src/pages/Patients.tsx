import LayoutUser from "@/components/layout/LayoutUser";
import { ROUTES } from "@/Router";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/hooks/useStore";
import Patients from "@/components/patients/Patients";
import { useEffect } from "react";
import { PatientsProvider } from "@/providers/patients/patientsProvider";

const PatientsPage = observer(() => {
  const navigate = useNavigate();
  const { authStore } = useStore();

  useEffect(() => {
    if (!authStore.token) navigate(ROUTES.LOGIN)
  }, [authStore.token, navigate])

  return (
    <LayoutUser>
      <PatientsProvider>
        <Patients />
      </PatientsProvider>
    </LayoutUser>
  );
});

export default PatientsPage;