import { useAppContext } from "@context/app/app-context"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { language, showSidebar } = useAppContext();
  const { t } = useTranslation()

  return (
    <nav className={`main_layout_sidebar z-10 sidebar w-1/5 ${!showSidebar ? 'collapse' : ''}`}>
      <h1 className="main_layout_sidebar_title text-3xl text-center my-20" style={{ fontFamily: language === 'en' ? "Lilita One" : "Lalezar" }}>{t('mainLayout.title')}</h1>
      <ol className="main_layout_sidebar_options p-10 flex flex-col gap-3">
        <Link to={'/'} className="child text-lg cursor-pointer">{t('mainLayout.allCourses')}</Link>
        <Link to={'admins'} className="child text-lg cursor-pointer">{t('mainLayout.admins')}</Link>
        <Link to={'manage-access'} className="child text-lg cursor-pointer">{t('mainLayout.manageAccess')}</Link>
        <Link to={'statistic-analyze'} className="child text-lg cursor-pointer">{t('mainLayout.statisticAnalyze')}</Link>
        <Link to={'change-password'} className="child text-lg cursor-pointer">{t('mainLayout.changePassword')}</Link>
      </ol>
    </nav>
  )
}