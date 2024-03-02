import { createContext, useContext, useState } from "react";

const EditUserContext = createContext();

export const EditUserProvider = ({ children }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");

  return (
    <EditUserContext.Provider
      value={{ nombre, setNombre, email, setEmail, rol, setRol }}
    >
      {children}
    </EditUserContext.Provider>
  );
};

export const useEditUserContext = () => {
  return useContext(EditUserContext);
};
