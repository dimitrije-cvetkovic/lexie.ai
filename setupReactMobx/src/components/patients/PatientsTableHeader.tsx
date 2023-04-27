import { IPatientsTableHeaderProps } from "@/types/views";
import clsx from "clsx";

export default function PatientsTableHeader({ containerClass }: IPatientsTableHeaderProps) {
  return (
    <div className={clsx("d-flex w-100 f-items-center text-center", containerClass)}>
      <h5 className="w-10 w-25-sm w-10-md">ID</h5>
      <h5 className="w-10 w-25-sm w-20-md">First Name</h5>
      <h5 className="w-10 hidden-md">Middle Name</h5>
      <h5 className="w-10 w-25-sm w-20-md">Last Name</h5>
      <h5 className="w-10 w-25-md hidden-sm">Email</h5>
      <h5 className="w-10 hidden-md">Phone Number</h5>
      <h5 className="w-10 hidden-md">Birthdate</h5>
      <h5 className="w-10 hidden-md">Profile Picture</h5>
      <h5 className="w-20 w-25-sm w-25-md">Actions</h5>
    </div>
  );
}
