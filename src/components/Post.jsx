import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  })
  const publishedAtFormat = format(publishedAt, 'yyyy-MM-dd HH:mm:SS', { locale: ptBR })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true 
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar
            src={author.avatarUrl}
            hasBorder
          />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormat}
          dateTime={publishedAtFormat}>
          {publishedDateRelativeToNow} 
        </time>
      </header>
      <main>
        {content.text.map(row => {
          return <p>{row}</p>
        })}
        {content.links.map(link => {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              href={link.url}>
              👉️ {link.text}
            </a>
          )
        })}

        <p className={styles.tags}>
          {content.tags.map(tag => {
            return `#${tag} `
          })}
        </p>
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
