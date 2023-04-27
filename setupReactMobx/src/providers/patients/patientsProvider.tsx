import { ReactNode } from "react";
import { IAddPatientResponse, IPatientsResponse } from "@/types/apis";
import { IPatientRecord, IUser } from "@/types/domain";
import PatientsApi from "@/apis/patientsApi";
import { runInAction } from "mobx";
import { useStore } from "@/hooks/useStore";
import { PatientsContext } from "@/providers/contexts";
import { IPatientModal } from "@/types/views";

export function PatientsProvider({ children }: { children: ReactNode }) {
  const { patientsStore, authStore } = useStore();

  const initPatients = async () => {
    PatientsApi.getPatients(authStore.token!)
    .then((patientsResponse: IPatientsResponse) => {

      if (patientsResponse?.error) {
        console.error(patientsResponse.error);
        throw patientsResponse.error; //TODO: return??
      }

      runInAction(() => {
        patientsStore.setPatients(patientsResponse.patients);
      });
    })
    .catch((e) => console.error(e));
  }

  const getPatientInfo = (patientId?: string) => {
    let patientInfo = patientsStore.defaultPatient;
    if (patientId) {
      patientInfo = patientsStore.getPatient(patientId)?.info!;
    }
    return patientInfo;
  }

  const getPatient = (patientId: string) => {
    return patientsStore.getPatient(patientId);
  }

  const addPatient = async (patient: IPatientModal) => {
    PatientsApi.addPatient(authStore.token!, patient)
    .then((patientsResponse: IAddPatientResponse) => {

      if (patientsResponse.error) {
        console.log(patientsResponse.error);
        throw patientsResponse.error;
      }

      runInAction(() => {
        patientsStore.addPatient(patientsResponse.patient);
      });
    })
    .catch((e) => console.error(e));
  }

  const updatePatient = async (patientId: string, patientInfo?: IUser, patientRecord?: IPatientRecord) => {
    try {
      let patient = (await patientsStore.getPatient(patientId));

      if (!patient) throw new Error(`Patient ${patientId} does not exist`);

      if (patientInfo) {
        patient.info = patientInfo;
      }
      if (patientRecord) {
        patient.record = patientRecord;
      }

      const response = await PatientsApi.updatePatient(authStore.token!, patient);

      if (response.error) {
        console.log(response.error);
        throw response.error;
      }

      runInAction(() => {
        patientsStore.updatePatient(patient!);
      });
    }
    catch(e) {
      console.error(e);
    }
  }


  const deletePatient = async (patientId: string) => {
    try {
      const response = await PatientsApi.deletePatient(authStore.token!, patientId);

      if (response.error) {
        console.log(response.error);
        throw response.error;
      }

      runInAction(() => {
        patientsStore.deletePatient(patientId);
      });
    }
    catch(e) {
      console.error(e);
    }
  }

  return (
    <PatientsContext.Provider value={{initPatients, getPatient, getPatientInfo, addPatient, updatePatient, deletePatient}}>
      {children}
    </PatientsContext.Provider>
  );
}
