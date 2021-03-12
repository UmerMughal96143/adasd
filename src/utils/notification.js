import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export const successNotification = (msg) => {
  toast.success(msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 2500 });
};
export const errorNotification = (msg) => {
  toast.error(msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 2500 });
};

export const infoNotification = (msg) => {
  toast.info(msg, { position: toast.POSITION.TOP_RIGHT, autoClose: 2500 });
};
