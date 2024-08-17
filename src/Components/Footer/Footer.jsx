import s from './Footer.module.sass'

export default function Footer() {
  return (
    <footer className={s.footer}>
        <div className={s.other}>
            <span className={s.name}>
                © <span className={s.logo}>CLOWI</span> 2024
            </span>
            <svg className={s.gitHub} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" fill="#888888" />
            </svg>
        </div>
        <div className={s.tools}>
            <h3 className={s.title}>
                Tools
            </h3>
            <ul className={s.list}>
                <li className={s.item}>Palette</li>
                <li className={s.item}>Gradient</li>
                <li className={s.item}>Image palette</li>
                <li className={s.item}>Lorem ipsum</li>
                <li className={s.item}>Color picker</li>
            </ul>
        </div>
        <div className={s.company}>
            <h3 className={s.title}>
                Company
            </h3>
            <ul className={s.list}>
                <li className={s.item}>About</li>
                <li className={s.item}>Terms 0f Service</li>
                <li className={s.item}>Privacy Policy</li>
                <li className={s.item}>Cookie Policy</li>
            </ul>
        </div>
        <div className={s.contact}>
            <h3 className={s.title}>
                Contact
            </h3>
            <ul className={s.list}>
                <li className={s.item}>hi@okwi.com</li>
            </ul>
        </div>
    </footer>
  )
}