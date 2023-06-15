import styles from './App.module.css'
import { Header } from './components/Header.jsx'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post title='Paulo Victor' link='https://piluvitu.dev' linkText='piluvitu.dev' />
          <Post title='Paulo Victor' link='https://piluvitu.dev' linkText='piluvitu.dev' />
          <Post title='Paulo Victor' link='https://piluvitu.dev' linkText='piluvitu.dev' />
        </main>
      </div>
    </>
  )
}

export default App
