import { IPatientInfoProps } from "@/types/views";
import PatientActions from "./PatientActions";

export default function PatientInfo({ patient }: IPatientInfoProps) {
 
  const patientInfo = patient.info;

  return (
    <div className="d-flex w-100 f-items-center text-center">
      <div className="w-10 w-25-sm w-10-md f-self-center text-bold">
        { patient.id }
      </div>
      <div className="w-10 w-25-sm w-20-md f-self-center text-ellipsis">
        { patientInfo.firstName }
      </div>
      <div className="w-10 hidden-md f-self-center">{ patientInfo.middleName }</div>
      <div className="w-10 w-25-sm w-20-md f-self-center text-ellipsis">
        { patientInfo.lastName }
      </div>
      <div className="w-10 w-25-md hidden-sm f-self-center text-ellipsis">
        { patientInfo.email }
      </div>
      <div className="w-10 hidden-md f-self-center">{ patientInfo.phone }</div>
      <div className="w-10 hidden-md f-self-center">{ patientInfo.birthdate }</div>
      <div className="w-20 w-25-sm w-25-md">
        <PatientActions patientId={patient.id} />
      </div>
    </div>
  );
}
