import { useToast, TYPE } from "./package";

const App = () => {
  const toast = useToast();
  let id = -1;
  const handleShowToast = () => {
    id = toast.show("teste", {
      duration: 1000,
      theme: "dark",
      type: TYPE.ERROR,
      // title:'a'
    });
  };
  const handleCloseToast = () => {
    toast.clear();
  };
  const handleCloseLastToast = () => {
    toast.dismiss(id);
  };
  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>
      <button onClick={handleCloseLastToast}>Close Last Toast</button>
      <button onClick={handleCloseToast}>Close All Toast</button>
    </div>
  );
};

export default App;
