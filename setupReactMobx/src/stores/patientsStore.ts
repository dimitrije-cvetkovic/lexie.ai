import { IUser } from './../types/domain';
import { IPatient } from "@/types/domain";
import { action, observable, makeObservable } from "mobx";

export default class PatientsStore {
  patients: IPatient[] = [];

  constructor() {
    makeObservable(this, {
      patients: observable,
      setPatients: action,
      addPatient: action,
      updatePatient: action,
      deletePatient: action,
    });
  }

  get defaultPatient() {
    return {
      firstName: '',
      lastName: '',
      middleName: '',
      email: '',
      phone: '',
      birthdate: '',
      address: ''
    } as IUser
  }

  getPatient = (patientId: string) => {
    return this.patients.find(p => p.id === patientId);
  }

  setPatients = async (patients: IPatient[]) => {
    this.patients = patients;
  }

  addPatient = async (patient: IPatient) => {
    console.log(patient);
    this.patients.push(patient);
  };

  updatePatient = async (patient: IPatient) => {
    const patientIndex = this.patients.findIndex(p => p.id === patient.id);

    if (patientIndex > -1) {
      this.patients[patientIndex] = patient;
    }
  }

  deletePatient = async (patientId: string) => {
    const patientIndex = this.patients.findIndex(p => p.id === patientId);

    if (patientIndex > -1) {
      this.patients.splice(patientIndex, 1);
    }
  }
}
