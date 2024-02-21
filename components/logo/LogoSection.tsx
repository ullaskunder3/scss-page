import styles from "./logo.module.scss";
export const LogoSection = () => {
    return (
        <section className={styles.logoSection}>
        <div style={{ width: "100px", height: "100px" }}>
          <div className={styles.square}></div>
        </div>
      </section>
    )
}