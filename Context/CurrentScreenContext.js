import React, { createContext, useState } from "react";

export const CurrentScreenContext = createContext();

export const CurrentScreenProvider = ({ children }) => {
    const [currentScreen, setCurrentScreen] = useState('null');

    return (
        <CurrentScreenContext.Provider value={[currentScreen, setCurrentScreen]}>
            {children}
        </CurrentScreenContext.Provider>
    )

}