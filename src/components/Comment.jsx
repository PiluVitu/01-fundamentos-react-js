import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://pbs.twimg.com/profile_images/1456460952963067910/LhmLkpJD_400x400.jpg" />
      <section className={styles.commentBox}>
        <header>
          <h3>
            Paulo Victor <span>(você)</span>
          </h3>
          <time
            dateTime="2023-06-15 11:53:55"
            title="15 de Junho ás 12:54">
            Cerca de 2h
          </time>
          <button title="Deletar Comentário">
            <Trash size={24} />
          </button>
        </header>
        <p>Muito bom Devon, parabéns!! 👏👏</p>
      </section>
      <button className={styles.rate}>
        <ThumbsUp size={20} />
        <span>
          Aplaudir
          <span>32</span>
        </span>
      </button>
    </div>
  )
}
