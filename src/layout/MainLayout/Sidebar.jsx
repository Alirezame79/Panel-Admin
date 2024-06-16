import { useAppContext } from "@context/app/app-context"
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { language, showSidebar } = useAppContext();
  const { t } = useTranslation()

  return (
    <nav className={`main_layout_sidebar z-10 sidebar w-1/5 ${!showSidebar ? 'collapse' : ''}`}>
      <h1 className="main_layout_sidebar_title text-3xl text-center my-20" style={{ fontFamily: language === 'en' ? "Lilita One" : "Lalezar" }}>{t('mainLayout.title')}</h1>
      <ol className="main_layout_sidebar_options p-10 flex flex-col gap-3">
        <li className="text-lg cursor-pointer">{t('mainLayout.allCourses')}</li>
        <li className="text-lg cursor-pointer">{t('mainLayout.admins')}</li>
        <li className="text-lg cursor-pointer">{t('mainLayout.manageAccess')}</li>
        <li className="text-lg cursor-pointer">{t('mainLayout.statisticAnalyze')}</li>
        <li className="text-lg cursor-pointer">{t('mainLayout.changePassword')}</li>
      </ol>
    </nav>
  )
}