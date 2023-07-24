import React from "react";
import Toast from "./toast";
import { eventManager } from "./eventManager";

const getId = (
  (i) => () =>
    i++
)(0);
export const TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};
function useToast() {
  const toast = {};
  toast.show = (content, options) => {
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
  toast.dismiss = (id) => {
    eventManager.emit("toast-delete", id);
  };
  return toast;
}
const ToastContainer = ({ globalOptions = {} }) => {
  return (<Toast isDark={globalOptions.isDark} />);
};

export { ToastContainer, useToast };