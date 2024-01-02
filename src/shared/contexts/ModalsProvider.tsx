import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import ModalAlert from "../components/modals/modalAlert";

type ModalsContextType = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  handleOpenModal: (textTitle: string, textDescription: string) => void;
  handleCloseModal: () => void,
};

export const ModalsContext = createContext<ModalsContextType>({
  isOpenModal: false,
  setIsOpenModal: () => {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
});

type ModalsProviderProps = {
  children: ReactNode;
};

const ModalsProvider = ({ children }: ModalsProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [textTitleModal, setTextTitleModal] = useState<string>("");
  const [textDescriptionModal, setTextDescriptionModal] = useState<string>("");

  const handleOpenModal = (textTitle: string, textDescription: string) => {
    setTextTitleModal(textTitle);
    setTextDescriptionModal(textDescription);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmitModal = () => {
    handleCloseModal();
  };

  return (
    <ModalsContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        handleOpenModal,
        handleCloseModal
      }}
    >
      {children}
      <ModalAlert
        isOpen={isOpenModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmitModal}
        textTitle={textTitleModal}
        textDescription={textDescriptionModal}
      />
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
