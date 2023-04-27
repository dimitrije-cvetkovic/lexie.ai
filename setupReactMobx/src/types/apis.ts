import { IUser, IPatient } from "./domain";

export interface IError {
  error?: string;
}

export interface ILoginResponse extends IError {
  token: string;
  tokenExpiration: number; 
  user: IUser;
}

export interface IPatientsResponse extends IError {
  patients: IPatient[];
  //canAddPatient: boolean;
  //canRemovePatient: boolean;
  //canEditPatient: boolean;
}

export interface IAddPatientResponse extends IError {
  patient: IPatient;
}

export interface IDeletePatientResponse extends IError {}