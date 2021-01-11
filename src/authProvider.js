// Authenticated by default
const authProvider = {
  login: ({ user }) => {
    console.log(user);
    if (user === "user") {
      localStorage.setItem("role", "user");
      localStorage.removeItem("not_authenticated");
      localStorage.setItem("login", "user");
      localStorage.setItem("user", "HogeHoge");
      return Promise.resolve();
    }
    if (user === "admin") {
      localStorage.setItem("role", "admin");
      localStorage.removeItem("not_authenticated");
      localStorage.setItem("login", "admin");
      localStorage.setItem("user", "HogeAdmin");
      return Promise.resolve();
    }
    localStorage.setItem("not_authenticated", true);
    return Promise.reject();
  },
  logout: () => {
    localStorage.setItem("not_authenticated", true);
    localStorage.removeItem("role");
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    return status === 401 || status === 403
      ? Promise.reject()
      : Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("not_authenticated")
      ? Promise.reject()
      : Promise.resolve();
  },
  getPermissions: () => {
    const role = localStorage.getItem("role");
    return Promise.resolve(role);
  },
  getIdentity: () => {
    return {
      id: localStorage.getItem("login"),
      fullName: localStorage.getItem("user"),
      avatar: localStorage.getItem("avatar"),
    };
  },
};

export default authProvider;
