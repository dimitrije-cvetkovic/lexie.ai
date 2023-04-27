import { IPatientActionProps } from "@/types/views";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function PatientAction({ title, icon, disabled, onClick }: IPatientActionProps) {
   return (
    <div className={clsx("d-flex w-100 f-items-center text-center", disabled ? "not-allowed" : "")}>
      <div
        data-tooltip-id="my-tooltip" 
        data-tooltip-content={title} 
        data-tooltip-place="top"
        onClick={onClick}
        >
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
}
