import { laptopimage1, laptopimage2, laptopimage3 } from "@lib/assets";
import Image from "next/image";
import styles from "./cta.module.scss";

import { Revalia } from "next/font/google";
const revalia = Revalia({
    weight: "400",
    style: "normal",
    subsets: ['latin'],
})

export const CallToActionSection = () => {
    return (
        <section className={styles.ctaContainer}>
            <div className={styles.ctaLayout}>
                <div className={`${styles.image} ${styles.desktop}`}>
                    <Image src={laptopimage1} alt={"as"} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.header}>
                            <h3 className={styles.subtitle}>Lorem ipsum</h3>
                        </div>
                        <div className={`${styles.image} ${styles.mobile}`}>
                            <Image src={laptopimage1} alt={"as"} fill style={{ objectFit: "cover" }} />
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
    )
}