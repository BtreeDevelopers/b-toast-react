import Toast from "./toast";
import { eventManager } from "./eventManager";
import { OptionToast, ToastApi, ToastPlugin, TYPE } from "./types/toast";

const getId = (
  (i) => () =>
    i++
)(0);
function useToast() {
  const toast: ToastApi = {} as ToastApi;
  toast.show = (content: string, options?: OptionToast) => {
    const props = Object.assign(
      {},
      { id: getId(), type: TYPE.SUCCESS, duration: 5000 },
      options,
      {
        content,
      }
    );
    eventManager.emit("toast-add", props);
    return props.id;
  };
  toast.clear = () => eventManager.emit("clear-all");
  toast.dismiss = (id: any) => {
    eventManager.emit("toast-delete", id);
  };
  return toast;
}
const ToastContainer = ({
  globalOptions = {},
}: {
  globalOptions?: ToastPlugin;
}) => {
  return <Toast isDark={globalOptions?.theme === "dark" || false} />;
};

export { ToastContainer, useToast, TYPE };
