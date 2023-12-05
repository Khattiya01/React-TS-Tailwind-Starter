import useUserData from "../../../../shared/hooks/useUserData";

const UserProfilePage = () => {
  const { userData, error, isLoading, refreshUserData } = useUserData({
    userId: "",
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {!error &&
        !isLoading &&
        userData?.data?.map((item) => <div key={item.id}>{item?.email}</div>)}
    </div>
  );
};

export default UserProfilePage;
