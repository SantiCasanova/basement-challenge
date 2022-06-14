import styles from './App.module.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Separator from './components/Separator'
import Store from './components/Store'
import Footer from './components/Footer'
import CartProvider from './context/CartProvider'

function App() {

  return (
    <div className={styles.app}>
      <CartProvider>
        <Nav />
        <Header />
        <Separator />
        <Store />
        <Footer />
      </CartProvider>
    </div>
  )
}

export default App
