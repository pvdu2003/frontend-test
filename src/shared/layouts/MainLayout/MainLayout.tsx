import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./MainLayout.module.css";
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles["main-layout"]}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
