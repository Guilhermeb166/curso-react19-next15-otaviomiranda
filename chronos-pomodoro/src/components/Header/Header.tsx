import styles from './Header.module.css'

type HeaderProps = {

}

export default function Header(props) {


    return (
        <header className={styles.header}>
            <h1>{props.children}</h1>
        </header>
    )
}
