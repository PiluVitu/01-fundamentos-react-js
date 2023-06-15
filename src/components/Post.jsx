import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1456460952963067910/LhmLkpJD_400x400.jpg"
            hasBorder
          />
          <div>
            <strong>Paulo Victor</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <time
          title="14 de Junho ás 20:20"
          dateTime="2023-06-14 20:18:55">
          Publicado há 1h
        </time>
      </header>
      <main>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento
          da Rocketseat. O nome do projeto é DoctorCare
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.link}>
          👉️ {props.linkText}
        </a>
        <p className={styles.tags}>#novoprojeto #nlw #rocketseat</p>
      </main>
      <form className={styles.commentForm}>
        <h3>Deixe seu feedback</h3>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <Comment />
    </article>
  )
}
