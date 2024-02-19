import { Revalia } from "next/font/google";
import styles from "./Header.module.scss";
const revalia = Revalia({
    weight: "400",
    style: "normal",
    subsets: ['latin'],
}) 
export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.svg}>
                    <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.3314 0.249512H32.851V18.9147C32.6959 18.9411 32.5416 18.9698 32.388 19.0006L25.7514 1.55539L20.6291 3.50405L27.2769 20.9785C27.1564 21.0507 27.0368 21.1245 26.9183 21.1998L14.5203 7.20028L10.4175 10.8337L22.8542 24.8769L22.7994 24.9471L6.3691 15.8925L3.72398 20.6923L20.2167 29.7813C20.1777 29.8991 20.14 30.0175 20.1036 30.1364L1.45746 27.4631L0.679688 32.888L17.5294 35.3038L0.730951 38.0522L1.61586 43.4607L20.3633 40.3934L20.3744 40.424L3.75673 49.6304L6.4126 54.4243L23.0996 45.1794C23.16 45.2525 23.221 45.3251 23.2826 45.3971L10.9388 59.9458L15.1177 63.4914L27.4236 48.9874L20.7003 66.78L25.8269 68.7171L32.6002 50.7923C32.6835 50.8079 32.7671 50.8228 32.851 50.8371V69.9999H38.3314V50.837C38.4267 50.8208 38.5217 50.8037 38.6165 50.7858L45.4302 68.6963L50.5524 66.7477L43.7495 48.8654C43.8261 48.8207 43.9022 48.7753 43.978 48.7294L56.6613 63.051L60.764 59.4175L48.1518 45.1761L64.8122 54.3575L67.4574 49.5577L50.8203 40.3892C50.856 40.2904 50.8908 40.1913 50.9247 40.0916L69.7241 42.7869L70.5019 37.362L53.654 34.9465L70.451 32.1983L69.5661 26.7898L50.9816 29.8305L50.9541 29.7476L67.4253 20.6223L64.7694 15.8284L48.3608 24.9191C48.2785 24.8136 48.1949 24.7092 48.11 24.6059L60.2436 10.3051L56.0646 6.75952L43.9683 21.0165C43.9366 20.9973 43.9049 20.9783 43.8731 20.9593L50.4819 3.46948L45.3553 1.53231L38.7574 18.9933C38.616 18.9652 38.474 18.9391 38.3314 18.9147V0.249512Z" fill="#6A45FF" />
                    </svg>
                </div>
                <div className={`${revalia.className} ${styles.text}`}>Logo</div>
            </div>
            <input type="checkbox" id="nav--checkbox" className={styles.nav__checkbox} />
            <label htmlFor="nav--checkbox" className={styles.nav__toggle}>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav className={styles.nav}>
                <ul className={styles.nav__menu}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/page1">Page 1</a></li>
                    <li><a href="/page2">Page 2</a></li>
                </ul>
            </nav>
        </header>

    )
}