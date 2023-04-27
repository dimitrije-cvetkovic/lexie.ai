import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify';
import { ILoginModal } from "@/types/views";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/Router";

const schema = yup.object({
  username: yup.string().required().email(),
  password: yup.string().required(),
}).required();

const Login = observer(() => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginModal>({
    resolver: yupResolver(schema)
  });
  const { authStore } = useStore();

  const onSubmit = (data: ILoginModal) => {
    authStore.login(data)
    .then(() => {
      toast.info('Logged in');
      navigate(ROUTES.PATIENTS)
    })
    .catch((error: any) => {
      toast.error(error)
    });
  };
    
  return (
    <div className={`${styles["login-form"]} h-100 d-flex f-justify-center`}>
      <div className="d-flex f-items-center">
        <form className="d-flex f-column" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} autoFocus />
            <p>{errors.username?.message}</p>

            <input {...register("password")} type="password" />
            <p>{errors.password?.message}</p>

            <input type="submit" />
        </form>
      </div>
    </div>
  );
});

export default Login;