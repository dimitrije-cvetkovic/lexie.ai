import { IPatientsTableRowProps } from "@/types/views";
import clsx from "clsx";
import { useState } from "react";
import PatientInfo from "./PatientInfo";
import PatientRecord from "./PatientRecord";

export default function PatientsTableRow({ containerClass, patient }: IPatientsTableRowProps) {

  const [isPatientRecordOpened, togglePatientRecord] = useState(false);

  return (
    <div className={clsx("d-flex w-100 f-items-center text-center", containerClass)}>
      <PatientInfo patient={patient} onClick={() => togglePatientRecord(!isPatientRecordOpened)} />
      {isPatientRecordOpened && <PatientRecord patientId={patient.id} record={patient.record} />}
    </div>
  );
}
