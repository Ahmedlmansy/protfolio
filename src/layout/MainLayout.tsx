import { Outlet } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <SectionHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
