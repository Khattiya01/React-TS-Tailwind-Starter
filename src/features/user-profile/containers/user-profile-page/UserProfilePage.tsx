import { useState } from "react";
import { useUserProfile } from "./useUserProfilePage";

const UserProfilePage = () => {
  // hooks
  const {
    UserProfile,
    CreateUserProfile,
    UpdateUserProfile,
    DeleteUserProfile,
  } = useUserProfile();

  // data
  const { userData, isLoading, refreshUserData } = UserProfile();
  const { postUserProfile, isLoadingPost, responsePostUserProfile } =
    CreateUserProfile();
  const { putUserProfile, responsePutUserProfile } = UpdateUserProfile();
  const { deleteUserProfile, isErrorDelete } = DeleteUserProfile();
  // state
  const [email, setEmail] = useState<string>("");
  const [emailUpdate, setEmailUpdate] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");

  // handle
  const handleCreateForm = async () => {
    const payload = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
    };
    await postUserProfile(payload).then(() => {
      refreshUserData();
      console.log("success", responsePostUserProfile?.msg);
    });
  };

  const handleUpdateForm = async (item: {
    id: number;
    lastname: string;
    firstname: string;
    email?: string;
    password: string | number;
  }) => {
    const payload = {
      id: item.id,
      email: emailUpdate,
      password: item.password,
      firstname: item.firstname,
      lastname: item.lastname,
    };
    await putUserProfile(payload).then(() => {
      refreshUserData();
      console.log("update success", responsePutUserProfile?.message);
    });
  };

  const handleDeleteForm = async (id: string | number) => {
    await deleteUserProfile(id);
    await refreshUserData();
    await isErrorDelete ? console.log("delete failed", responsePutUserProfile?.message) : console.log("delete success", responsePutUserProfile?.message)
  };

  // lifecycle

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
      {isLoading || isLoadingPost ? (
        <div>loading...</div>
      ) : (
        userData?.data &&
        userData?.data?.length > 0 &&
        userData?.data?.map((item, index: number) => (
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
    </section>
  );
};

export default UserProfilePage;
