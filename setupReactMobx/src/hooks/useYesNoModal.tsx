import { IYesNoModalProps } from "@/types/views";
import Modal from "react-modal";
import { useModal } from "react-modal-hook";
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'react-perfect-scrollbar/dist/css/styles.css';

export default function useYesNoModal({children, title, noText, yesText, onYes}: IYesNoModalProps) {
  const [showModal, hideModal] = useModal(() => {
    return (
      <Modal
        isOpen
        className="d-flex f-items-center f-column f-space-evenly modal__body"
        content-className="d-flex f-column f-self-center modal__content"
      >
        <div className="w-70 f-self-center modal__header">
            <h1 className="text-center">{title}</h1>
        </div>
        <PerfectScrollbar>
          {children}
        </PerfectScrollbar>
        <div
            className="w-50 d-flex f-items-center f-space-evenly f-self-center modal__footer"
        >
          <button onClick={hideModal}>{noText || "No"}</button>
          {onYes && <button onClick={onYes}>{yesText || "Yes"}</button>}
        </div>
      </Modal>
    );
  });
  
  return [showModal, hideModal]
}