import AuthStore from "@/stores/authStore";
import PatientsStore from "@/stores/patientsStore";
import { IPatient, IPatientRecord, IUser } from "@/types/domain";
import { IPatientModal } from "./views";

export interface IStore {
  patientsStore: PatientsStore;
  authStore: AuthStore;
}

export interface IPatientsService {
  initPatients: () => Promise<void>,
  getPatient: (patientId: string) => IPatient | undefined,
  getPatientInfo: (patientId?: string) => IUser,
  addPatient: (patient: IPatientModal) => void,
  updatePatient: (patientId: string, patientInfo?: IUser, patientRecord?: IPatientRecord) => void,
  deletePatient: (patientId: string) => void
}