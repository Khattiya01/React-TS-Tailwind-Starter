import useMyipPage from "./useMyipPage";

const MyipPage = () => {
  const { myip } = useMyipPage();

  if (myip.error) return <div>failed to load</div>;

  if (myip.isLoading) return <div>loading...</div>;

  return <>{JSON.stringify(myip.userData)}</>;
};
export default MyipPage;
