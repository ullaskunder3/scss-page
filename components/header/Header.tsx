import styles from "./Header.module.scss";
export const Header = () => {
    return (
        <header className={styles.header}>
            <div>logo</div>
            <nav className={styles.nav}>
                <input type="checkbox" id="nav--checkbox" className={styles.nav__checkbox} />

                <label htmlFor="nav--checkbox" className={styles.nav__toggle}>
                    <svg className={styles.menu__open} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                        <g fill="#6a45ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path></g></g>
                    </svg>
                    <svg className={styles.menu__close} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                        <g fill="#6a45ff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g>
                    </svg>
                </label>

                <div className={styles.nav__list}>
                    <ul className={styles.nav__menu}>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/home">Page 1</a>
                        </li>
                        <li>
                            <a href="/home">Page 2</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}