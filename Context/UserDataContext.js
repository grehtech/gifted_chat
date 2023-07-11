import React, { useState, createContext } from 'react';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

    const [userId, setUserId] = useState('');

    return (
        <UserDataContext.Provider
            value={[userId, setUserId]}
        >
            {children}
        </UserDataContext.Provider>
    )


}



