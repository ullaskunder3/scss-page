import { laptopimage1, laptopimage2, laptopimage3 } from "@lib/assets";
import Image from "next/image";
import styles from "./main.module.scss";

import { Revalia } from "next/font/google";
const revalia = Revalia({
    weight: "400",
    style: "normal",
    subsets: ['latin'],
})

export const MainSection = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.content}>
                <h2>Lorem</h2>
                <p>Subtitle</p>
            </div>
            <div className={styles.imgGroup}>
                <div className={styles.imgWarpper}>
                    <Image src={laptopimage1} alt={"as"} fill style={{ objectFit: "cover" }} />
                    <div className={styles.imgTextOverlay}>
                        <span className={styles.card_num}>01</span>
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
                <div className={styles.imgWarpper}>
                    <Image src={laptopimage2} alt={"as"} fill style={{ objectFit: "cover" }} />
                    <div className={styles.imgTextOverlay}>
                        <span className={styles.card_num}>01</span>
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
                <div className={styles.imgWarpper}>
                    <Image src={laptopimage3} alt={"as"} fill style={{ objectFit: "cover" }} />
                    <div className={styles.imgTextOverlay}>
                        <span className={styles.card_num}>01</span>
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
            <div className={styles.absoluteRectangel}></div>
        </section>
    )
}