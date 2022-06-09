import styles from './App.module.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Separator from './components/Separator'
import Store from './components/Store'

function App() {

  return (
    <div className={styles.app}>
      <Nav />
      <Header />
      <Separator />
      <Store />
    </div>
  )
}

export default App
