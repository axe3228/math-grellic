import { merge } from "lodash";
import { ReactNode } from "react";
import ReactModal, { Props as ReactModalProps, Styles } from "react-modal";

export interface ModalProps extends ReactModalProps{
  children: ReactNode;
  overrideStyles?: Styles;
  minHeight?: string;
}

export const defaultModalStyles = {
  overlay: {
    zIndex: 50,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.375rem",
    overlfow: "hidden",
    zIndex: 50,
    minHeight: "25vh",
    maxHeight: "90vh",
  },
};

export const Modal = ({ 
  children,
  overrideStyles,
  minHeight,
  ...modalProps }: ModalProps) => {
    const customModalStyles = {
      overlay: {
        backgroundColor: "rgb(37, 37, 38, 0.75)",
        ...defaultModalStyles.overlay
      },
      content: {
        ...defaultModalStyles.content,
      },
    }
  return (
    <ReactModal
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      style={merge(customModalStyles, overrideStyles)}
      {...modalProps}
    >
      {children}
    </ReactModal>
)};
