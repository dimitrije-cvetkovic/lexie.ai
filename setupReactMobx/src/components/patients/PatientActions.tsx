import { usePatientsService } from "@/hooks/usePatientsService";
import useYesNoModal from "@/hooks/useYesNoModal";
import submitForm from "@/helpers/submitForm";
import { IPatientActionsProps, IPatientModal, IYesNoModalProps } from "@/types/views";
import { toast } from "react-toastify";
import PatientAction from "./PatientAction";
import PatientForm from "./PatientForm";
import PatientInfo from "./PatientInfo";
import { SubmitHandler } from "react-hook-form";
import { IUser } from "@/types/domain";

export default function PatientActions({ patientId, patientRecordId }: IPatientActionsProps) {
  const patientsService = usePatientsService();

  const [openPatientInfoModal] = useYesNoModal({
    title: "Patient Data",
    children: <PatientInfo patient={patientsService.getPatient(patientId)!} />,
    onNo: "Close",
  } as IYesNoModalProps);

  // const [openPatientRecordModal] = useYesNoModal({
  //   title: "Patient Record History",
  //   children: <PatientInfo patient={patientsService.getPatient(patientId)} />,
  //   onNo: "Close",
  // } as IYesNoModalProps);

  const deletePatient = async () => {
    try {
      await patientsService.deletePatient(patientId);
      toast.success(`Patient with id ${patientId} has been successfully deleted.`);
    } catch (error) {
      toast.error(`Deletition of patient with id ${patientId} failed.`);
    }
  };

  const [openDeleteModal] = useYesNoModal({
    title: "Are you sure you want to delete this patient?",
    children: <PatientInfo patient={patientsService.getPatient(patientId)!} />,
    onYes: deletePatient,
    yesText: "Delete",
    noText: "Close",
  } as IYesNoModalProps);

  const updateFormName = "form-patient-update"

  const updatePatient: SubmitHandler<IPatientModal> = async (patient) => {
    try {
      await patientsService.updatePatient(patientId, patient as IUser);
      toast.success(`Patient with id ${patientId} has been successfully updated.`);
    } catch (error) {
      toast.error(`Update of patient with id ${patientId} failed.`);
    }
  };

  const [openUpdateModal] = useYesNoModal({
    title: "Edit patient",
    children: <PatientForm patientId={patientId} formName={updateFormName} onSubmit={updatePatient} />,
    onYes: () => submitForm(updateFormName),
    yesText: "Save",
    noText: "Close",
  } as IYesNoModalProps);

  return (
    <div className="d-flex f-items-center f-space-evenly f-wrap h-100 w-100">
      <div className="d-flex f-column show-md hidden w-20-md w-30-xs">
        <PatientAction
          onClick={openPatientInfoModal}
          title="See Patient"
          icon={['fas', 'user']}
        />
      </div>
      {/* <div className="d-flex f-column w-25 w-20-md w-30-xs">
        <PatientAction
          onClick={openPatientModal}
          title="See Patient Record"
          icon="['fas', 'location-dot']"
          //disabled={!patient.AddressID}
        />
      </div> */}
      <div className="d-flex f-column w-25 w-20-md w-30-xs">
        <PatientAction
          onClick={openUpdateModal}
          title="Edit patient"
          icon={['fa', 'user-pen']}
        />
      </div>
      <div className="d-flex f-column w-25 w-20-md w-30-xs">
        <PatientAction
          onClick={openDeleteModal}
          title="Delete patient"
          icon={['fa', 'trash-can']}
        />
      </div>
    </div>
  );
}
