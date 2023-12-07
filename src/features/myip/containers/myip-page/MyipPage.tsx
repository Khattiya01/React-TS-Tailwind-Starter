import useMyipPage from "./useMyipPage";

const MyipPage = () => {
  const { myip } = useMyipPage();

  if (myip.error) return <div>failed to load</div>;

<<<<<<< HEAD
  return <>
    
  </>
=======
  if (myip.isLoading) return <div>loading...</div>;

  return <>{JSON.stringify(myip.userData)}</>;
>>>>>>> 20c45201b44d9e54867e52a1dbdc98df9ba77b41
};
export default MyipPage;
