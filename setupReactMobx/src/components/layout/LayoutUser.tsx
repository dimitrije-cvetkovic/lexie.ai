import { ReactNode } from 'react';
import Header from '@/components/header/Header';
import styles from "./LayoutUser.module.scss";

const LayoutUser = ({ children }: { children: ReactNode }) => {  
  return (
    <div className={styles["layout"]}>
      <Header className="w-100"/>
      <div className="w-100 d-flex f-justify-center f-column f-align-items">
        {children}
      </div>
    </div>
  );
}

export default LayoutUser;