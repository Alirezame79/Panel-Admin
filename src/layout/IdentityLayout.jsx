import { Outlet } from "react-router-dom";
import ChangeLanguage from '../shared-components/change-language';
import { useTranslation } from 'react-i18next';
import ChangeTheme from '../shared-components/change-theme';
import { useAppContext } from '../context/app/app-context';

const IdentityLayout = () => {
  const { t } = useTranslation()
  const { language } = useAppContext();

  return (
    <div className='identity_layout min-h-screen'>
      <nav className='layout_nav navbar justify-start items-center gap-2 px-4'>
        <ChangeTheme />
        <ChangeLanguage />
      </nav>
      <div className="w-2/3 m-auto pt-32">
        <h1 className="title text-5xl text-center mb-20" style={{ fontFamily: language === 'en' ? "Lilita One" : "Lalezar" }}>{t('login.title')}</h1>
        <Outlet />
      </div >
    </div >
  )
}

export default IdentityLayout;