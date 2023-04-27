export interface IUser {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  birthdate: string;
  address: string;
}

export interface IPatient {
  id: string; //guid
  info: IUser;
  record: IPatientRecord;
}

export interface IPatientRecord {
  id: string;
  description: string;
  decease: string;
}

//export interface IPatientDecease {}

  