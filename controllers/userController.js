export const join = (req, res) => res.send("join", { pageTitle: "Join" });
export const login = (req, res) => res.send("login", { pageTitle: "Login" });
export const logout = (req, res) => res.send("logout", { pageTitle: "Logout" });
export const userDetail = (req, res) =>
  res.send("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.send("editProfile", { pageTitle: "Change Password" });
export const changePassword = (req, res) =>
  res.send("changePassword", { pageTitle: "Change Password" });
