import { GitCard } from './GitCard'
import { Project } from './Project'
import { TextAboutStacks } from './TextAboutStacks'
import { CarouselStacks } from './CarouselStacks'
import { Avatar } from './Avatar'
import { AboutMe } from './AboutMe'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import emailAvatar from '../assets/emailAvatar.svg'
import { useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom'

export function Main() {
  const [githubRepos, setGithubRepos] = useState([])

  useEffect(() => {
    async function fetchGIthub() {
      await fetch('https://api.github.com/users/Romeusorionaet/repos')
        .then((response) => response.json())
        .then((data) => setGithubRepos(data))
    }
    fetchGIthub()
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1400 })
  })

  return (
    <main className="flex flex-col items-center overflow-hidden desktop:px-20">
      <section className="flex flex-col gap-20 desktop:gap-40 pb-1 tablet:flex-row justify-between items-center tablet:h-screen max-w-[95%]">
        <Avatar />
        <AboutMe />
      </section>

      <section className="bg-blue-900 w-full px-5 tablet:px-10 my-20 pb-6 rounded-lg text-center">
        <div>
          <h2 className="text-2xl my-1">Meus Projetos Principais</h2>

          <p>
            {githubRepos.length} repositório público no github
            <a
              className="text-zinc-300 ml-0.5"
              href="https://github.com/Romeusorionaet"
              target="blank"
            >
              romeusoares
            </a>
          </p>
        </div>

        <div className="flex flex-wrap tablet:gap-4 text-start">
          <Project
            title="Explorer Food"
            link={'https://myfrontendfood.netlify.app'}
            previewDesktop={'https://bit.ly/3Ll6Ga0'}
            previewMobile={'https://bit.ly/3ApRiCF'}
            AOSanimation="zoom-in-left"
          />

          <Project
            title="Find a Friend"
            link={'https://gccfindafriend.netlify.app'}
            previewDesktop={'https://bit.ly/3LelSFM'}
            previewMobile={'https://bit.ly/3LriNT3'}
            AOSanimation="flip-right"
          />

          <Project
            title="Todo List"
            link={'https://todo-list-murex-iota.vercel.app'}
            previewDesktop={'https://bit.ly/3WDxnL2'}
            previewMobile={'https://bit.ly/3MZeb7b'}
            AOSanimation="zoom-in-left"
          />

          <Project
            title="Yougioh Cards pro"
            link={'https://yougioh-card-pro.vercel.app'}
            previewDesktop={'https://bit.ly/3IYBiwr'}
            previewMobile={'https://bit.ly/42qWd1R'}
            AOSanimation="zoom-in-left"
          />

          <Project
            title="Coffe Delivery"
            link={'https://coffee-delivery-amber-phi.vercel.app'}
            previewDesktop={'https://bit.ly/43UDqO9'}
            previewMobile={'https://bit.ly/46isknG'}
            AOSanimation="zoom"
          />
        </div>

        <div className="mt-4 flex gap-6 items-center justify-center">
          <NavLink to="/FullProjects">
            <p>Ver Todos</p>
          </NavLink>
          <BsFillArrowRightCircleFill />
        </div>
      </section>

      <section className="flex flex-col desktop:flex-row desktop:justify-evenly gap-20 bg-blue-900 items-center w-full py-10 rounded-lg overflow-hidden">
        <div className="max-w-25 px-4 desktop:w-30">
          <TextAboutStacks />
        </div>

        <div className="text-center z-10">
          <h2 className="text-2xl mb-40">STACK PRINCIPAIS</h2>
          <CarouselStacks />
        </div>
      </section>

      <section className="flex my-4 justify-center items-center flex-col">
        <a className="handle-button" href="mailto:romeusoares14569@gmail.com">
          Clique aqui e envie um email
        </a>
        <img src={emailAvatar} alt="" />
      </section>

      <section className="gitCardAnimation h-2">
        {Array.from({ length: 110 }).map((item, index) => {
          return <GitCard key={String(index)} index={index} />
        })}
      </section>
    </main>
  )
}
