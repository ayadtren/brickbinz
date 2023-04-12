import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    // Add any necessary logic to handle logging out
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        logOut: logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
