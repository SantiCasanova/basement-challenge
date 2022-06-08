import styles from './App.module.scss'
import Nav from './components/Nav'
import Header from './components/Header'

function App() {

  return (
    <div className={styles.app}>
      <Nav />
      <Header />
    </div>
  )
}

export default App
