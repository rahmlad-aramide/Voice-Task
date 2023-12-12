import { toast } from "react-toastify";
const toastParams = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
const loadingParams = {
    ...toastParams,
    autoClose: false
}

export const notify = (val) => toast.success(`${val}`, toastParams);
export const warn  = (val) => toast.warn(`${val}`, toastParams);
export const error  = (val) => toast.error(`${val}`, toastParams);
export const inform = (val) => toast.info(`${val}`, toastParams);
export const loadingToast = (toastId, val) =>{
    if(! toast.isActive(toastId)) {
        toastId = toast.info(`${val}`, loadingParams);
    }
}

export const successToast = (toastId, val) => {
    toast.update(toastId, {render: val, type:toast.TYPE.SUCCESS, autoClose: 2000})
}
export const errorToast = (toastId, val) => {
    toast.update(toastId, {render: val, type:toast.TYPE.ERROR, autoClose: 2000})
}

// export const notify = (val) => showToast('success', val);
// export const warn = (val) => showToast('warn', val);
// export const error = (val) => showToast('error', val);
// export const inform = (val) => showToast('info', val);

// export const loadingToast = (val) => showToast('info', val, loadingParams);

// export const successToast = (toastId, val) => {
//   if (!toast.isActive(toastId)) {
//     // Only show the toast if it's not currently active
//     toast.success(`${val}`, { ...toastParams, toastId });
//   }
// };

// export const errorToast = (toastId, val) => {
//   if (!toast.isActive(toastId)) {
//     // Only show the toast if it's not currently active
//     toast.error(`${val}`, { ...toastParams, toastId });
//   }
// };

// // Common function to show all types of toasts
// const showToast = (type, val, customParams = {}) => {
//   const toastId = `${type}_${Date.now()}`;
//   if (!toast.isActive(toastId)) {
//     // Only show the toast if it's not currently active
//     toast[type](`${val}`, { ...toastParams, toastId, ...customParams });
//   }
// };