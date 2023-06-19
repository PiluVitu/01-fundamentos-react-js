import styles from './App.module.css'
import { Header } from './components/Header.jsx'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1456460952963067910/LhmLkpJD_400x400.jpg',
      name: 'Paulo Victor',
      role: 'Front-End Developer'
    },
    content: {
      text: [
        'Fala galeraa 👋',
        'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'
      ],
      links: [
        {
          text: 'piluvitu.dev',
          url: 'https://piluvitu.dev'
        }
      ],
      tags: ['novoprojeto', 'nlw', 'rocketseat']
    },
    publishedAt: new Date('2023-06-14 20:18:55')
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://scontent.fthe1-1.fna.fbcdn.net/v/t39.30808-6/352787561_2635583419914284_4201773197647621786_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFsZlmCZkBMfrBEgHKivZXJpCEAxmdwuRmkIQDGZ3C5GfCTUY0_mists__JxQxvgK7EcCVRxy2ml-Fib2LYmyzw&_nc_ohc=xMkpKByaFecAX_50EEh&_nc_ht=scontent.fthe1-1.fna&oh=00_AfA-S6-bUxEI1H8PBg8UOwS6dCPYeClBJVaPRGNaug9Syg&oe=649599AC',
      name: 'Lívia Ricci',
      role: 'Biomédica'
    },
    content: {
      text: [
        'Fala galeraa 🤘🏻',
        'Acabei de subir um artigo, sobre o desenvolvimentos e as mutações das células x, vejam lá, essa pesquisa vai mudar o mundo'
      ],
      links: [
        {
          text: 'liviaricci.bio',
          url: '#'
        }
      ],
      tags: ['novoprojeto', 'artigo', 'biomedicina', 'x']
    },
    publishedAt: new Date('2023-06-17 17:10:18')
  },
  {
    id: 3,
    author: {
      avatarUrl:
        'https://us-tuna-sounds-images.voicemod.net/6b1b6202-4834-40d7-9f64-77bdcda57a8d-1686956073236.png',
      name: 'James',
      role: 'Artista de circo/ Salada de Fruta'
    },
    content: {
      text: [
        'Fala galeraa 👋',
        'Acabei de subir mais um projeto,, uma empresa de salada de fruta no capricho, peça sua salada de forma rápida e com o frescor que o James sabe'
      ],
      links: [
        {
          text: 'jamessaladadefruta.com.br',
          url: '#'
        }
      ],
      tags: [
        'novoprojeto',
        'salada',
        'fruta',
        'saladaDeFruta',
        'empreendimento',
        'felicidade da comunidade'
      ]
    },
    publishedAt: new Date('2023-06-19 10:50:55')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
