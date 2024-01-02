import { useEffect, useRef, useState } from "react";
import {
  useGetUserProfile,
  useCreateUserProfile,
  useUpdateUserProfile,
  useDeleteUserProfile,
} from "./useUserProfilePage";
import {
  payloadCreateUserType,
  payloadDeleteUserType,
  payloadUpdateUserType,
} from "../../types/payload";
import { useUserProfile } from "../../hooks/useContexts/useUserProfile";
import { useModal } from "../../../../shared/hooks/useModal";
import { OptionModal } from "../../../../shared/components/modals/modal";
import withAuthentication from "../../../../shared/hoc/withAuthentication";
import { UserRole } from "../../../../shared/types/userRole";

const UserProfilePage = () => {
  // state
  const [email, setEmail] = useState<string>("");
  const [emailUpdate, setEmailUpdate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [page, setPage] = useState<string>("1");
  const [limit, setLimit] = useState<string>("10");

  const isModalOpenRef = useRef(false);

  // hooks
  const { responseGetUserProfile, isLoading, refreshUserData } =
    useGetUserProfile({
      page: page,
      limit: limit,
    });
  const { postUserProfile, isLoadingPost } = useCreateUserProfile();
  0;
  const { putUserProfile } = useUpdateUserProfile();
  const { deleteUserProfile, isLoadingDelete } = useDeleteUserProfile();
  // const { handleOpenModal } = useUserProfile();
  const { handleOpenModal, isOpenModal } = useModal();

  // handle
  const handleCreateForm = async () => {
    const payload: payloadCreateUserType = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      accountName: "",
    };
    await postUserProfile(payload).then((res) => {
      console.log(res.data.msg);
      refreshUserData();
    });
  };

  const handleUpdateForm = async (item: payloadUpdateUserType) => {
    const payload: payloadUpdateUserType = {
      id: item.id,
      email: emailUpdate,
      password: item.password,
      accountName: "",
      firstname: item.firstname,
      lastname: item.lastname,
    };
    await putUserProfile(payload);
    await refreshUserData();
  };

  const handleDeleteForm = async (id: string | number) => {
    const payload: payloadDeleteUserType = {
      id,
    };
    await deleteUserProfile(payload);
    await refreshUserData();
  };

  const handleOpenModalAlert = () => {
    handleOpenModal("title alert", " description alert ", OptionModal.ALERT);
  };

  const handleOpenModalAlertGlobal = () => {
    handleOpenModal(
      "title alert global",
      " description alert global",
      OptionModal.ALERT
    );
  };

  // lifecycle
  useEffect(() => {
    if (isModalOpenRef.current && !isOpenModal) {
      console.log("Modal ถูกปิดแล้ว");
    }
    isModalOpenRef.current = isOpenModal;
  }, [isOpenModal]);

  return (
    <section className=" w-screen h-screen min-h-screen p-2 flex items-center flex-col gap-4">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="first name"
          className=" border-2 rounded-sm "
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          className=" border-2 rounded-sm "
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          className=" border-2 rounded-sm "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className=" border-2 rounded-sm "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className=" rounded-md bg-blue-200 p-2"
          onClick={() => handleCreateForm()}
        >
          create
        </button>
      </div>
      <h3 className=" font-bold text-2xl">User Profile</h3>
      <div>
        <input
          type="text"
          placeholder="page"
          onChange={(e) => setPage(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="limit"
          onChange={(e) => setLimit(e.target.value)}
        />
      </div>
      {isLoading || isLoadingPost || isLoadingDelete ? (
        <div>loading...</div>
      ) : (
        responseGetUserProfile?.data &&
        responseGetUserProfile?.data?.length > 0 &&
        responseGetUserProfile?.data?.map((item, index) => (
          <div key={item?.id} className="flex gap-2 w-[400px] justify-between">
            {index + 1}
            <div>
              <input
                type="text"
                placeholder="email"
                className=" border-2 rounded-sm "
                defaultValue={item?.email}
                onChange={(e) => setEmailUpdate(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                className=" rounded-md bg-blue-200 p-2"
                onClick={() => handleDeleteForm(item.id)}
              >
                delete
              </button>
              <button
                className=" rounded-md bg-blue-200 p-2"
                onClick={() => handleUpdateForm(item)}
              >
                update
              </button>
            </div>
          </div>
        ))
      )}

      <button
        type="button"
        onClick={() => handleOpenModalAlertGlobal()}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
      focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5
      py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
      dark:focus:ring-blue-800"
      >
        open modal
      </button>
    </section>
  );
};

export default withAuthentication(UserProfilePage, UserRole.ADMIN);
