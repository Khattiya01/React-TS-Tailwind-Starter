import useMyipPage from "./useMyipPage";

const MyipPage = () => {
  const { myip } = useMyipPage();

  console.log("myip.userData", myip);

  return <>
    
  </>
};
export default MyipPage;
