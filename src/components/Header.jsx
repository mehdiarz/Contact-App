import styles from './Header.module.css'
function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href='https://react.dev/'>React.dev</a> | Reactjs Practicing
        </p>
    </div>
  )
}

export default Header