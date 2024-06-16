import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNavbar";
import Footer from "./Footer";

export default function MainLayout() {

  return (
    <div className="main_layout flex min-h-screen">
      <Sidebar />
      <div className="main w-full">
        <TopNav />
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}