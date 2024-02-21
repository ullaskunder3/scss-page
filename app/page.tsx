import Image from "next/image";
import styles from "./page.module.scss";
import { Header } from "@components/header/Header";
import { laptopimage1, laptopimage2, laptopimage3 } from "@lib/assets";
import Carousel from "@components/SubComponent/Carousel";
import { Revalia } from "next/font/google";
const revalia = Revalia({
  weight: "400",
  style: "normal",
  subsets: ['latin'],
})
export default function Home() {
  const images = [
    { src: laptopimage1, alt: "laptopimage1", width: 100, height: 100 },
    { src: laptopimage2, alt: "laptopimage2", width: 100, height: 100 },
    { src: laptopimage3, alt: "laptopimage3", width: 100, height: 100 },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.stickyheader}>
        <Header />
      </div>

      <div className={styles.heroWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            priority
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkso6pBwACGgEie2Im0gAAAABJRU5ErkJggg=="
            src={laptopimage3}
            fill
            style={{objectFit:"cover"}}
            alt="hero image"
          />
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.logoGroup}>
            <div className={styles.svg}>
              <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M38.3314 0.249512H32.851V18.9147C32.6959 18.9411 32.5416 18.9698 32.388 19.0006L25.7514 1.55539L20.6291 3.50405L27.2769 20.9785C27.1564 21.0507 27.0368 21.1245 26.9183 21.1998L14.5203 7.20028L10.4175 10.8337L22.8542 24.8769L22.7994 24.9471L6.3691 15.8925L3.72398 20.6923L20.2167 29.7813C20.1777 29.8991 20.14 30.0175 20.1036 30.1364L1.45746 27.4631L0.679688 32.888L17.5294 35.3038L0.730951 38.0522L1.61586 43.4607L20.3633 40.3934L20.3744 40.424L3.75673 49.6304L6.4126 54.4243L23.0996 45.1794C23.16 45.2525 23.221 45.3251 23.2826 45.3971L10.9388 59.9458L15.1177 63.4914L27.4236 48.9874L20.7003 66.78L25.8269 68.7171L32.6002 50.7923C32.6835 50.8079 32.7671 50.8228 32.851 50.8371V69.9999H38.3314V50.837C38.4267 50.8208 38.5217 50.8037 38.6165 50.7858L45.4302 68.6963L50.5524 66.7477L43.7495 48.8654C43.8261 48.8207 43.9022 48.7753 43.978 48.7294L56.6613 63.051L60.764 59.4175L48.1518 45.1761L64.8122 54.3575L67.4574 49.5577L50.8203 40.3892C50.856 40.2904 50.8908 40.1913 50.9247 40.0916L69.7241 42.7869L70.5019 37.362L53.654 34.9465L70.451 32.1983L69.5661 26.7898L50.9816 29.8305L50.9541 29.7476L67.4253 20.6223L64.7694 15.8284L48.3608 24.9191C48.2785 24.8136 48.1949 24.7092 48.11 24.6059L60.2436 10.3051L56.0646 6.75952L43.9683 21.0165C43.9366 20.9973 43.9049 20.9783 43.8731 20.9593L50.4819 3.46948L45.3553 1.53231L38.7574 18.9933C38.616 18.9652 38.474 18.9391 38.3314 18.9147V0.249512Z" fill="#6A45FF" />
              </svg>
            </div>
            <div className={`${revalia.className} ${styles.title}`}>Logo</div>
          </div>
          <div className={styles.mainTextWrapper}>
            <h2 className={styles.main_subtitle}>Lorem ipsum dolor sit amet</h2>
            <p className={styles.main_paragraph}>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              ut labore et dolore magna aliqua.</p>
          </div>
          <div style={{ position: "relative", bottom: "0", height: "66px" }}>
            <div style={{
              fontFamily: 'Noto Sans', fontSize: "16px", fontWeight: "600", lineHeight: "160%", letterSpacing: "0.25em"
            }}>
              scroll
            </div>
            <div style={{
              position: "absolute", left: "50%", bottom: "0", borderLeft: "1px solid white", height: "30px"
            }}></div>
          </div>
        </div>
      </div>

      <section className={styles.mainContainer}>
        <div className={styles.content}>
          <h2>Lorem</h2>
          <p>Subtitle</p>
        </div>
        <div className={styles.imgGroup}>
          <div className={styles.imgWarpper}>
            <Image src={laptopimage1} alt={"as"} fill style={{objectFit:"cover"}} />
            <div className={styles.imgTextOverlay}>
              <span className={styles.card_num}>01</span>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
          <div className={styles.imgWarpper}>
            <Image src={laptopimage2} alt={"as"} fill style={{objectFit:"cover"}} />
            <div className={styles.imgTextOverlay}>
              <span className={styles.card_num}>01</span>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
          <div className={styles.imgWarpper}>
            <Image src={laptopimage3} alt={"as"} fill style={{objectFit:"cover"}} />
            <div className={styles.imgTextOverlay}>
              <span className={styles.card_num}>01</span>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
        <div className={styles.absoluteRectangel}></div>
      </section>
      <section className={styles.ctaContainer}>
        <div className={styles.ctaLayout}>
        <div className={`${styles.image} ${styles.desktop}`}>
            <Image src={laptopimage1} alt={"as"} fill style={{objectFit:"cover"}} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.wrapper}>
              <div className={styles.header}>
                <h3 className={styles.subtitle}>Lorem ipsum</h3>
              </div>
              <div className={`${styles.image} ${styles.mobile}`}>
                <Image src={laptopimage1} alt={"as"} fill style={{objectFit:"cover"}} />
              </div>
              <p className={styles.para} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className={styles.ctaBtnWrapper}>
              <div className={styles.btnText}>
                <p>Lorem ipsum</p>
              </div>
              <div style={{ width: "40px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="6.2 6.2 27.6 27.6"><path style={{ stroke: "none", fillRule: "nonzero", fill: "#6A45FF", fillOpacity: "1" }} d="M22.1 14.3a.8.8 0 0 0-1.1 0c-.3.3-.3.8 0 1.1l3.8 3.8H13.6a.8.8 0 0 0 0 1.6h11.2L21 24.6c-.3.3-.3.8 0 1l.6.3c.2 0 .4 0 .6-.2l5.1-5.2c.3-.3.3-.8 0-1.1Zm0 0" /><path style={{ stroke: "none", fillRule: "nonzero", fill: "#6A45FF", fillOpacity: "1" }} d="M20 6.2a13.8 13.8 0 0 0 0 27.6 13.8 13.8 0 0 0 0-27.6Zm0 26a12.2 12.2 0 0 1 0-24.4 12.2 12.2 0 0 1 0 24.4Zm0 0" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.absoluteRectangel}></div>
      </section>
      <section className={styles.logoSection}>
        <div style={{ width: "100px", height: "100px" }}>
          <div className={styles.square}></div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.pagelink}>
          <span>Home</span>
          <span>Page 1</span>
          <span>Page 2</span>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.verticalLine}></div>
          <div className={styles.wrapper}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path></svg>
            </span>
            <span>
              <svg height="64" width="64" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512" xmlSpace="preserve"><path d="M113 145a256 256 0 1 0 0 512 256 256 0 0 0 0-512zm102.2 216.2.1 6.8c0 69.5-52.9 149.7-149.7 149.7-29.7 0-57.4-8.7-80.6-23.6a105.6 105.6 0 0 0 77.9-21.8 52.5 52.5 0 0 1-49.1-36.5 53.6 53.6 0 0 0 23.8-1 52.6 52.6 0 0 1-42.2-51.6v-.6a53.3 53.3 0 0 0 23.8 6.6 52.7 52.7 0 0 1-16.3-70.3c26 31.9 64.7 52.8 108.4 55a52.7 52.7 0 0 1 89.6-48c12-2.4 23.2-6.7 33.4-12.8a52.8 52.8 0 0 1-23.1 29.1c10.6-1.3 20.8-4.1 30.2-8.3-7 10.6-15.9 19.8-26.2 27.3z" fill="#fff" /></svg>
            </span>
            <span>
              <svg width="64" height="64" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h32v32H0z" /><path d="M17 0c8.2 0 14.8 6.7 14.8 14.8V17c0 8.1-6.6 14.8-14.7 14.8h-2.3C6.7 31.9 0 25.2 0 17v-2.3C0 6.7 6.7 0 14.8 0zm-.8 8h-3.6A4.7 4.7 0 0 0 8 12.7v6.9C8 22 10 24 12.6 24h6.9c2.5 0 4.5-2 4.5-4.5v-6.9C24 10 22 8 19.5 8h-3.3zM16 9.5h3.2c2 0 3.3 1.3 3.3 3.3v6.4c0 2-1.2 3.3-3.3 3.3H13c-2 0-3.4-1.3-3.4-3.3v-6.3c0-2.1 1.3-3.4 3.4-3.4h3zm0 2.4a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm0 1.5a2.7 2.7 0 1 1 0 5.3 2.7 2.7 0 0 1 0-5.3zm4.3-2.6a1 1 0 0 0-1 1 1 1 0 1 0 1-1z" fill="#fff" fillRule="nonzero" /></g></svg>
            </span>
            <span>
              <svg width={64} xmlns="http://www.w3.org/2000/svg" viewBox="15.7 3.9 47.6 48.2"><path d="M39.5 3.9A24 24 0 0 0 15.7 28a24 24 0 0 0 23.8 24.1A24 24 0 0 0 63.3 28 24 24 0 0 0 39.5 3.9Zm12 18.4v3.3a11.2 11.2 0 0 1-7-2.4v10.1a8.5 8.5 0 0 1-8.4 8.5 8.5 8.5 0 0 1-6-2.5 8.5 8.5 0 0 1-.4-11.7 8.5 8.5 0 0 1 7.6-2.8v4.6a4 4 0 0 0-5.3 4 4 4 0 0 0 3.9 4c.5 0 1-.1 1.4-.3a4 4 0 0 0 2.8-3.8V14.2h4.5l.1 1.3a7 7 0 0 0 6.8 5.6Zm0 0" style={{ stroke: "none", fillRule: "nonzero", fill: "rgb(255, 255, 255)", fillOpacity: "1" }}></path></svg>
            </span>
          </div>
        </div>
        <div className={styles.copyright}>
          © Logo, Inc.
        </div>
      </footer>
    </main>
  );
}

// d: w280px m: w40