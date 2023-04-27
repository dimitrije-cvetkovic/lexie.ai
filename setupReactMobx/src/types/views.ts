import { SubmitHandler } from 'react-hook-form';
import { MouseEventHandler, ReactEventHandler } from "react";
import { IPatient, IPatientRecord } from "./domain";

export interface ILoginModal {
  username: string;
  password: string;
}

export interface IHeaderProps {
  className: string;
}

export interface IPatientModal {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IPatientModalProps { 
  patientId?: string;
  formName: string;
  onSubmit: SubmitHandler<IPatientModal>;
}

export interface IYesNoModalProps {
  title: string;
  onYes?: MouseEventHandler<HTMLButtonElement>;
  yesText?: string;
  noText?: string;
  children?: React.ReactNode;
}
//{children: ReactNode, title: string, noText?: string, yesText?: string, yesClick?: ReactEventHandler}

export interface IPaginatedTableProps {
  page: number;
  pageItems: any[];
  nextPage: number;
  goToNextPage: () => void;
  previousPage: number;
  goToPreviousPage: () => void;
}

export interface IPatientsTableProps {
  patients: IPatient[];
}

export interface IPatientsTableHeaderProps {
  containerClass?: string;
}

export interface IPatientsTableRowProps {
  containerClass?: string;
  patient: IPatient;
}

export interface IPatientInfoProps {
  patient: IPatient;
  //deletePatient: (patient: IPatient) => void;
  onClick?: ReactEventHandler;
}

export interface IPatientActionsProps {
  patientId: string;
  patientRecordId?: string;
}

export interface IPatientActionProps {
  title: string;
  icon: [any, any];
  disabled?: boolean;
  onClick: ReactEventHandler;
}

export interface IPatientRecordProps {
  patientId: string,
  record: IPatientRecord;
}

export interface IPatientRecordItemProps {
  title: string;
  value: string;
  setNewValue: (value: string) => void;
  isEditEnabled: boolean;
}

