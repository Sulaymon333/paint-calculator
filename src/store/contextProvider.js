import { useState, createContext } from 'react';

export const FormContext = createContext({
    formContext: {},
    updateFormData: (formData) => {},
});
const ContextProvider = ({ children }) => {
    const [userFormData, setUserFormData] = useState({});
    const updateFormData = (formData) => {
        setUserFormData(formData);
    };

    const context = {
        formContext: userFormData,
        updateFormData,
    };

    return <FormContext.Provider value={context}>{children}</FormContext.Provider>;
};

export default ContextProvider;
