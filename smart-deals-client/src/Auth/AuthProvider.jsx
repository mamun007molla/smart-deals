import React from 'react';
import { AuthContext } from './Authcontext';

const AuthProvider = ({children}) => {
    const authInfo={
        
    }
    return (
        <AuthContext value={authInfo} >{children}</AuthContext>
    );
};

export default AuthProvider;