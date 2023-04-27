import { ROUTES } from '@/Router';
import { useStore } from '@/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { IHeaderProps } from '@/types/views';

export default function Header({ className }: IHeaderProps) {
  const { authStore } = useStore();
  const navigate = useNavigate();

  async function logout() {
      await authStore.logout();
      navigate(ROUTES.LANDING)
  }
  
  return (<header className={clsx("d-flex f-justify-between", className)}>
            <h3>Welcome <i>{authStore.user?.email}</i></h3>
            <div className="d-flex f-column f-justify-center">
              <button onClick={logout}>Logout</button>
            </div>
          </header>
  );
}