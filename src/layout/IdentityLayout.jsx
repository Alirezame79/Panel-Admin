import './style.css';
import { Outlet } from "react-router-dom";

const IdentityLayout = () => {
  return (
    <div className='min-h-screen bg-slate-100'>
      <div className="w-2/3 m-auto pt-32">
        <h1 className="text-5xl text-center mb-20 text-slate-800 special_font">Panel Admin Project</h1>
        <Outlet />
      </div >
    </div >
  )
}

export default IdentityLayout;