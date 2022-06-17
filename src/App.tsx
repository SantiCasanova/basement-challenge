import styles from './App.module.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Separator from './components/Separator'
import Store from './components/Store'
import Footer from './components/Footer'

function App() {

  return (
    <div className={styles.app}>
      <Nav />
      <Header />
      <Separator />
      <Store />
      <Footer />
    </div>
  )
}

export default App
