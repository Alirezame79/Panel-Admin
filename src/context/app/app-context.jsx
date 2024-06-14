import { createContext, useContext, useEffect, useReducer } from "react";
import appReducer from "./app-reducer";
import { useTranslation } from "react-i18next";

const AppContext = createContext();
const initialState = {
  language: localStorage.getItem('language') || 'en',
  theme: localStorage.getItem('theme') || 'light'
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  // Language Handlers
  function changeLanguage(language) {
    dispatch({ type: 'CHANGE_LANGUAGE', payload: language })
  }
  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem('language', state.language);
  }, [state.language])

  // Theme Handlers
  function changeTheme(theme) {
    dispatch({ type: 'CHANGE_THEME', payload: theme })
  }
  useEffect(() => {
    localStorage.setItem('theme', state.theme)
  }, [state.theme])

  return (
    <AppContext.Provider value={{ ...state, changeLanguage, changeTheme }}>
      {children}
    </AppContext.Provider>);
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { useAppContext, AppProvider }
// useAppContext in consumers
// AppProvider in Main app