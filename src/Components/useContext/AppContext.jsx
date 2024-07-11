/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "99426099";
    const users = [
        {
            id: 1,
            name: 'Gowtham',
            phone: '9943' // Changed 'Ph' to 'phone' for consistency
        }
    ];

    return (
        <AppContext.Provider value={{ phone, ...users }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default ContextProvider;
