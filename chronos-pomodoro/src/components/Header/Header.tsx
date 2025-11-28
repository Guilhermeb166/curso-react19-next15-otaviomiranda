import styles from './Header.module.css'

type HeaderProps = {
    children: React.ReactNode;//aceita todos os tipos que react aceita como children

}

export default function Header({ children }: HeaderProps) {


    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}
