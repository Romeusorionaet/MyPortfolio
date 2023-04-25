import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {GitCard} from '../components/GitCard';
import {CarouselStacks} from '../components/CarouselStacks';
import {Project} from '../components/Project';

import romeuImg1 from '../assets/ImgProfiles/romeuImg1.png';

import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {AiOutlineMail} from 'react-icons/ai';
import Typing from 'react-typing-animation';

export function Home() {
  const [githubRepos, setGithubRepos] = useState([])
  
  useEffect(()=>{
    async function fetchGIthub(){
      await fetch('https://api.github.com/users/Romeusorionaet/repos')
      .then(response => response.json())
      .then(data => setGithubRepos(data))
    }
    fetchGIthub();
  },[]);

  useEffect(()=>{
    Aos.init({duration: 1400});
  },[]);

  return (
    <div className="min-h-screen text-TEXT-COLOR-900">

      <Header />

      <main className='flex flex-col items-center overflow-hidden'>

        <div className='h-44 flex items-center justify-center text-center text-3xl'>

        <Typing>
        <Typing.Backspace count={20} />
          <p className='text-xl'>
            ROMEU SOARES <br/> DEVELOPER FRONTEND
          </p>
        </Typing>
          
        </div>

        <section className="gitCardAnimation h-31">
          {
            Array.from({length: 110}).map((item, index)=>{
              return(
                <GitCard 
                key={String(index)} 
                index={index} 
                />
              )
            }) 
          }
          <div 
            className='w-80 overflow-hidden flex justify-center absolute rounded-full'>
              
             <img
             className='-m-24 mb-0'
             src={romeuImg1} 
             alt='Romeu soares' 
             />
          </div>
        </section>

        <section 
          className='my-15 tablet:p-4 w-full flex justify-center items-center flex-col tablet:flex-row tablet:gap-40 tablet:pr-16 desktop:gap-80'>

          <div 
            data-aos="fade-right"
            className='w-20 bg-BG-DESCRIPTION rounded-lg p-4 flex flex-col gap-4 desktop:w-40'>

            <p>
              Eu sou Romeu soares, sou Front-end Web Developer junior, com experiência nas principais ferramentas
              atual no mercado como, React, Typescript e Tailwindcss. 
              Sou apaixonado pela area, e sempre estou em busca de novas oportunidades 
              para aprender e crescer.
            </p>

            <p>
              Resumo sobre como consegui meus conhecimentos na área.
              Para estágio inícial da minha jornada concluí um curso de web design moderno
              com conceitos básicos sobre HTML, CSS e JavaScript. Após isso iniciei e 
              concluí com sucesso o programa Explorer da empresa de educação em tecnologia Rocketseat.
              Nela consegui definir meus objetivos e propósitos planejando minha trajetória. 
            </p>

            <p>
              Avancei meus conhecimentos nos conceitos básicos que me permitiu realizar projetos 
              mais complexos. Aprendi a montar e consumir uma API e utilizar banco de dados. Tudo isso realizando projetos pessoais simulando o mercado.
            </p>

            <p>  
              Isso me permitiu encontrar soluções e aprender a utilizar novas ferramentas 
              atuais no mercado como por exemplo a utilização do TypeScript e Tailwindcss.
              E não paro por aqui, continuo aprendendo, me atualizando para está sempre apto a 
              novo desafios.
            </p>

          </div>

          <div 
            className='mt-20 text-center tablet:-mt-20 active:bg-gradient-to-t from-indigo-400 rounded-full pr-6'>
            <h2 className='text-2xl mb-40'>STACK PRINCIPAIS</h2>
            <CarouselStacks />
          </div>

        </section>

        <section 
          className='bg-BG-HEADER my-20 tablet:-mt-20 pb-6 rounded-lg w-60 text-center'>

          <div>
            <h2 className='text-2xl my-1'>Meus Projetos Principais</h2>

            <p>
              {githubRepos.length} repositório público no github
              <a 
              className='text-zinc-300 ml-0.5' 
              href='https://github.com/Romeusorionaet'
              target='blank'
              > 
                romeusoares
              </a>
            </p>
          </div>

          <Project 
            title='Explorer Food' 
            link={'https://gccfindafriend.netlify.app'}
            previewDesktop={'https://bit.ly/3Ll6Ga0'}
            previewMobile={'https://bit.ly/3ApRiCF'}
            AOSanimation='zoom-in-left'
          />
            
          <Project 
            title='Find a Friend' 
            link={'https://gccfindafriend.netlify.app'}
            previewDesktop={'https://bit.ly/3LelSFM'}
            previewMobile={'https://bit.ly/3LriNT3'}
            AOSanimation='flip-right'
          />
          
        </section>

        <section 
            className="flex mb-4 justify-center items-center gap-2 flex-col tablet:flex-row tablet:gap-8">
            <AiOutlineMail className="text-9xl"/>

            <a 
            className='handle-button'
            href="mailto:romeusoares14569@gmail.com">
                Clique aqui e envie um email
            </a>
        </section>

        <section className="gitCardAnimation h-2">
          {
            Array.from({length: 110}).map((item, index)=>{
              return(
                <GitCard 
                key={String(index)} 
                index={index} 
                />
              )
            }) 
          }
        </section>
        
      </main>

      <Footer />

    </div>
  )
}

