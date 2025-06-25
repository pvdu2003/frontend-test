import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
