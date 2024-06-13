import { RouterProvider } from "react-router-dom"
import router from "./router"
import "./core/i18n";
import { useAppContext } from "./context/app/app-context";

function App() {
  const { language } = useAppContext();

  return (
    <div style={{ direction: language === 'en' ? 'ltr' : 'rtl' }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
