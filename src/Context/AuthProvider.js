import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AutContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AutContext.Provider value={allContexts}>
            {children}
        </AutContext.Provider>
    );
};

export default AuthProvider;