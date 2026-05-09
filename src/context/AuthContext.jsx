import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthDetails = createContext();


export function UserDetails({ children }) {

  const [authData, manageAuthData] = useState(() => {

    const details = localStorage.getItem("userdetails");

    return details && JSON.parse(details);

  });

  

  useEffect(() => {
    
    localStorage.setItem(
      "userdetails",
      JSON.stringify(authData)
    );

  }, [authData]);



  return (
    <AuthDetails.Provider value={{ authData, manageAuthData }}>
      {children}
    </AuthDetails.Provider>
  );
}

export default AuthDetails;