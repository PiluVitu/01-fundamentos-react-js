import styles from './Header.module.css'
import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
       <img src={Logo} alt="Logo Ignite Feed" />
       <h1>Ignite Feed</h1>
    </header>
  )
}
