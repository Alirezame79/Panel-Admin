import { RouterProvider } from "react-router-dom"
import router from "./router"
import "./core/i18n";
import { useAppContext } from "./context/app/app-context";
import { useEffect } from "react";

function App() {
  const { language, theme } = useAppContext();

  useEffect(() => {
    const head = document.head;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/css/${theme}.scss`;
    head.appendChild(link);

    return () => { head.removeChild(link) }
  }, [theme])

  return (
    <div style={{ direction: language === 'en' ? 'ltr' : 'rtl' }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
