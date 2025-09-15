
import React from "react";
import UserAppRoutes from "./routes/UserAppRoutes";
import AdminAppRoutes from "./routes/AdminAppRoutes";
import useAutoLogout from "./hooks/useAutoLogout";
function App() {


  return (
    <React.StrictMode>
      {useAutoLogout()}
      <UserAppRoutes />
      <AdminAppRoutes />
    </React.StrictMode>


  );
}

export default App;
