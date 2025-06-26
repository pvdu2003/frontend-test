import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AuthenticatedLayout.module.css";

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={styles["authenticated-layout"]}>
        <Sidebar />
        {children}
      </main>
    </>
  );
}

export default AuthenticatedLayout;
