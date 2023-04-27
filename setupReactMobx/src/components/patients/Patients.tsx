import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks/useStore";
import PatientsTable from "./PatientsTable";
import { useEffect } from "react";
import { usePatientsService } from "@/hooks/usePatientsService";
import { toast } from "react-toastify";
import styles from "./Patients.module.scss";

const patients = observer(() => {
  const { patientsStore } = useStore();
  const patientsService = usePatientsService();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        await patientsService.initPatients();
      } catch (e) {
        console.error(e);
        toast.error("Error getting patients. Please try again or contact the administrator.")
      }
    };

    fetchPatients();
  }, []);

  return (
    <>
      <div className="d-flex">
          <h1>Patients</h1>
          <div className="d-flex f-column f-justify-center">
            <button className={styles["btn"]}>Add new patient</button>
          </div>
      </div>
      <div className="w-100 d-flex f-column f-justify-center f-align-items">
        {!!patientsStore?.patients?.length && <PatientsTable patients={patientsStore.patients} />}
        {!patientsStore?.patients?.length && <div className="d-flex f-justify-center"><h3>No patients!</h3></div>}
      </div>
    </>
  );
});

export default patients;
