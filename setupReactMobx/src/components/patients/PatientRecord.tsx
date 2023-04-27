import { usePatientsService } from "@/hooks/usePatientsService";
import { IPatientRecord } from "@/types/domain";
import { IPatientRecordProps } from "@/types/views";
import { useState } from "react";
import { toast } from "react-toastify";
import PatientRecordItem from "./PatientRecordItem";

export default function PatientRecord({ patientId, record }: IPatientRecordProps) {
  const patientsService = usePatientsService();
  const [newDescription, setNewDescription] = useState(record.description);
  const [newDecease, setNewDecease] = useState(record.decease);
  const [isEditEnabled, toggleIsEditEnabled] = useState(false);

  const saveRecord = async () => {
    try {
      await patientsService.updatePatient(patientId, undefined, { description: newDescription, decease: newDecease } as IPatientRecord)
      toggleIsEditEnabled(!isEditEnabled)
    } catch (error) {
      toast.error("There was an error getting patients. Please try again, or contact your administrator.")
    }
  }

  return (
    <div className="d-flex f-space-evenly w-100">
      <div className="d-flex w-98 wrapper">
        <div className="d-flex f-column f-items-center f-self-center w-40">
          <h3 className="text-bold">Record Information</h3>
          <h5 className="text-bold">id: <i>{record.id}</i></h5>
        </div>
        <div className="d-flex w-60 f-column">
          <PatientRecordItem title="Description" value={record.description} setNewValue={setNewDescription} isEditEnabled={isEditEnabled} />
          <PatientRecordItem title="Decease" value={record.decease} setNewValue={setNewDecease} isEditEnabled={isEditEnabled}/>
          {!isEditEnabled && <button onClick={() => toggleIsEditEnabled(!isEditEnabled)}>Edit Record</button>}
          {isEditEnabled && 
          <button onClick={saveRecord}>Save Record</button>
          }
        </div>
      </div>
    </div>
  );
}
