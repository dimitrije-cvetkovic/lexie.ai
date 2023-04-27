import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IPatientModal, IPatientModalProps } from "@/types/views";
import { usePatientsService } from "@/hooks/usePatientsService";

import styles from "./PatientForm.module.scss";

const schema = yup.object({
  firstName: yup.string().required(),
  middleName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required()
}).required();

export default function PatientForm({ patientId, formName, onSubmit }: IPatientModalProps) {
  const patientService = usePatientsService();

  const { handleSubmit, control, formState: { errors } } = useForm<IPatientModal>({
    resolver: yupResolver(schema),
    defaultValues: patientService.getPatientInfo(patientId) as IPatientModal
  });

  return (
    <div className={`${styles["new-form"]} h-100 d-flex f-justify-center`}>
      <div className="d-flex f-items-center">
        <form name={formName} className="d-flex f-column" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <input {...field} placeholder="First Name"/>}
            />
            {errors.firstName && <p>{errors.firstName?.message}</p>}

            <Controller
                name="middleName"
                control={control}
                render={({ field }) => <input {...field} placeholder="Middle Name"/>}
            />
            <p>{errors.middleName?.message}</p>

            <Controller
                name="lastName"
                control={control}
                render={({ field }) => <input {...field} placeholder="Last Name"/>}
            />
            <p>{errors.lastName?.message}</p>

            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input {...field} placeholder="Username in form of an email" type='email'/>
                )}
            />
            <p>{errors.email?.message}</p>

            <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input {...field} placeholder="Phone number" type='email'/>
                )}
            />
            <p>{errors.phone?.message}</p>
        </form>
      </div>
    </div>
  );
};