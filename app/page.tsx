import styles from "./page.module.scss";
import { Header } from "@components/header/Header";
import { Hero } from "@components/hero/Hero";
import { MainSection } from "@components/main/Main";
import { CallToActionSection } from "@components/cta/CallToActionSection";
import { LogoSection } from "@components/logo/LogoSection";
import { Footer } from "@components/footer/Footer";
import { laptopimage1, laptopimage2, laptopimage3 } from "@lib/assets";
const images = [laptopimage1, laptopimage2, laptopimage3].map(image => image.src);

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.stickyheader}>
        <Header />
      </div>
      <Hero images={images} autoplayCarol={true} />
      <MainSection />
      <CallToActionSection />
      <LogoSection />
      <Footer />
    </main>
  );
}