import styles from "./page.module.scss";
import { Header } from "@components/header/Header";
import { Hero } from "@components/hero/Hero";
import { MainSection } from "@components/main/Main";
import { CallToActionSection } from "@components/cta/CallToActionSection";
import { LogoSection } from "@components/logo/LogoSection";
import { Footer } from "@components/footer/Footer";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.stickyheader}>
        <Header />
      </div>
      <Hero />
      <MainSection />
      <CallToActionSection />
      <LogoSection />
      <Footer />
    </main>
  );
}