import { PencilSimpleLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=40"
        alt="Cover Image"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://pbs.twimg.com/profile_images/1456460952963067910/LhmLkpJD_400x400.jpg"
          alt="Profile Image"
        />
        <strong>Paulo Victor</strong>
        <span>Front-End Developer</span>
      </div>
      <footer>
        <a href="#">
          {' '}
          <PencilSimpleLine size={20} />
          Edite seu perfil
        </a>
      </footer>
    </aside>
  )
}
