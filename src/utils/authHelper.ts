let logoutFn: (() => void) | null = null;

export const setLogoutHandler = (fn: () => void) => {
  logoutFn = fn;
};
export const triggerLogout = async () => {
  if (logoutFn) await logoutFn();
};
