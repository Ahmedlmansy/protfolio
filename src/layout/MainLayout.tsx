import { Outlet } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div>
      <SectionHeader />
      <main>
        <Outlet />
      </main>
    <Footer/>
      </div>
  );
}
