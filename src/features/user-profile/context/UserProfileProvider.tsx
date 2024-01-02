import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import ModalAlert from "../../../shared/components/modals/modalAlert";

type UserProfileContextType = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  textDescriptionModal: string;
  setTextDescriptionModal: Dispatch<SetStateAction<string>>;
  textTitleModal: string;
  setTextTitleModal: Dispatch<SetStateAction<string>>;
  handleOpenModal: (textTitle: string, textDescription: string) => void;
};

export const UserProfileContext = createContext<UserProfileContextType>({
  isOpenModal: false,
  setIsOpenModal: () => {},
  textDescriptionModal: "",
  setTextDescriptionModal: () => {},
  textTitleModal: "",
  setTextTitleModal: () => {},
  handleOpenModal: () => {},
});

type UserProfileProviderProps = {
  children: ReactNode;
};

const UserProfileProvider = ({ children }: UserProfileProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [textTitleModal, setTextTitleModal] = useState<string>("");
  const [textDescriptionModal, setTextDescriptionModal] = useState<string>("");

  const handleOpenModal = (textTitle: string, textDescription: string) => {
    console.log("open", textTitle, textDescription);
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
    <UserProfileContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        textDescriptionModal,
        setTextDescriptionModal,
        textTitleModal,
        setTextTitleModal,
        handleOpenModal,
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
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
