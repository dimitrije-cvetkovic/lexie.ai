import { IPatientRecordItemProps } from "@/types/views";

export default function PatientRecordItem({ title, value, isEditEnabled, setNewValue }: IPatientRecordItemProps) {
   return (
    <div className="d-flex w-100">
      <span className="w-40 text-bold">{ title }</span>
      {!isEditEnabled && <span className="w-60">{ value }</span>}
      {isEditEnabled && <textarea  className="w-60" maxLength={200} onChange={e => setNewValue(e.target.value)}>{ value }</textarea>}
    </div>
  );
}
