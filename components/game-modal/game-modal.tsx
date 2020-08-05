import styles from "./game-modal.module.scss";
import Layout from "../layout";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "auto",
    maxHeight: "350px",
  },
  content: {
    top: "10px",
    left: "10px",
    right: "10px",
    bottom: "10px",
  },
};

export default function GameModal({
  children,
  show,
  onClose,
}: {
  children: React.ReactNode;
  show: boolean;
  onClose(): void;
}) {
  return (
    <>
      {show && (
        <Modal
          isOpen={show}
          onRequestClose={onClose}
          ariaHideApp={false}
          style={customStyles}
        >
          <div className={styles.modalContent}>{children}</div>
        </Modal>
      )}
    </>
  );
}
