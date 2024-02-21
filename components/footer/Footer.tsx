import styles from "./footer.module.scss";
export const Footer = () => {
    return (
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
    )
}