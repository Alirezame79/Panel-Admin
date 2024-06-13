import './style.css';
import { Outlet } from "react-router-dom";
import ChangeLanguage from '../shared-components/change-language';
import { useTranslation } from 'react-i18next';

const IdentityLayout = () => {
  const { t } = useTranslation()

  return (
    <div className='min-h-screen bg-slate-100'>
      <nav className='navbar shadow-sm px-5'>
        <ChangeLanguage />
      </nav>
      <div className="w-2/3 m-auto pt-32">
        <h1 className="text-5xl text-center mb-20 text-slate-800 special_font">{t('login.title')}</h1>
        <Outlet />
      </div >
    </div >
  )
}

export default IdentityLayout;