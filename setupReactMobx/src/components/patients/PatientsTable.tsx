import { IPatientsTableProps } from "@/types/views";
import PatientsTableHeader from "./PatientsTableHeader";
import PatientsTableRow from "./PatientsTableRow";
import clsx from "clsx";
import styles from "./PatientsTable.module.scss"

export default function PatientsTable({ patients }: IPatientsTableProps) {
  return (
    <div className={styles["patients-table"]}>
      <PatientsTableHeader containerClass={styles["patients-table__header"]}/>
      <div className="d-flex">
        {patients?.map((patient, index) => {
          return (
            <PatientsTableRow containerClass={clsx("w-100", styles["patients-table__row"])} patient={patient} key={index}/>
          )
        })}
      </div>
    </div>
  );
}
