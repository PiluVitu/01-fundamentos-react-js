import styles from './App.module.css'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar'

import './global.css'
function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Minha pika</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum illum
            voluptatum vitae rerum assumenda natus aperiam ab minus sapiente! Eos, impedit? At ipsam
            ipsum odio, perferendis explicabo aspernatur culpa!
          </p>
        </main>
      </div>
    </>
  )
}

export default App
