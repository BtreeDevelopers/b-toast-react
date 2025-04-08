import { useEffect, useState } from "react";
import "../assets/global.scss";
import Timer from "./components/timer.tsx";
import ProgressBar from "./components/progress.tsx";
import X from "./components/x.tsx";
import { eventManager } from "./eventManager.ts";

const Toast = ({ isDark }: any) => {
  const [toasts, setToasts] = useState<any[]>([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(isDark);
    eventManager.on("toast-add", addToast);
    eventManager.on("toast-delete", deleteToast);
    eventManager.on("clear-all", clearAll);
    return () => {
      eventManager.off("toast-add");
      eventManager.off("toast-delete");
      eventManager.off("clear-all");
    };
  });

  function addToast(params: any) {
    setToasts((list: any) => [...list, params] as any);
  }
  function deleteToast(id: any) {
    const toastElement = document.getElementById(`toast-${id}`);
    if (toastElement) {
      toastElement.style.animation = "bounceOutRight 750ms";
      setTimeout(() => {
        setToasts((list) => {
          const finalList = [...list];
          const index = finalList.findIndex((e) => e.id === id);
          if (index !== -1) finalList.splice(index, 1);
          return finalList;
        });
      }, 750);
    }
  }
  function clearAll() {
    toasts.forEach((toast: any) => {
      deleteToast(toast.id);
    });
  }

  function getTheme(toast: any) {
    if (toast && typeof toast.isDark === "boolean") return toast.isDark;
    return dark;
  }

  return (
    <div className="b-toast__container">
      {toasts.map((toast) => (
        <div
          className={`b-toast__alert theme-${toast.type} ${
            getTheme(toast) ? "dark" : ""
          }`}
          id={`toast-${toast.id}`}
          key={toast.id}
          style={{
            animation: "bounceInRight 750ms",
          }}
        >
          <Timer
            timer={toast.duration}
            id={toast.id}
            closeToast={deleteToast}
          />
          <div className="b-toast__text">
            {toast.title ? (
              <h4 className={`b-toast__title color-${toast.type}`}>
                {toast.title}
              </h4>
            ) : null}
            <h4 className="b-toast__content">{toast.content}</h4>
          </div>

          <a onClick={() => deleteToast(toast.id)} className="b-toast__close">
            <X dark={getTheme(toast)} />
          </a>
          <ProgressBar type={toast.type} duration={toast.duration} />
        </div>
      ))}
    </div>
  );
};

export default Toast;
