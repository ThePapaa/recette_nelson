import React, { useContext, useState } from "react";

const LoginContext = React.createContext();

export const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider = ({ children }) => {
    return (
        <LoginContext.Provider value={useLoginContext()}>
            {children}
        </LoginContext.Provider>
    );
}