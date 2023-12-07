const ExamplePage = () => {
  
  const handle = (data) => {
    console.log("handle data:", data);
  };

  return (
    <div className=" h-screen min-h-screen flex flex-col items-center">
      <button
        className="bg-red-100 rounded-md p-2"
        onClick={() => handle("data 2")}
      >
        handleData
      </button>
    </div>
  );
};
export default ExamplePage;
