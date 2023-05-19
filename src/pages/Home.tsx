import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {GitCard} from '../components/GitCard';
import {Project} from '../components/Project';
import {About} from '../components/About';

import romeuImg1 from '../assets/ImgProfiles/romeuImg1.png';
import bgInProduction from '../assets/bg-InProduction.jpg'

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
    <div className="min-h-screen text-white-900 pt-20">

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

        <section className="gitCardAnimation">
          {
            Array.from({length: 43}).map((_, index)=>{
              return(
                <div key={String(index)} className='opacity-10'>
                  <GitCard 
                  key={String(index)} 
                  index={index} 
                  />
                </div>
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

        <section>
          <About />
        </section>

        <section 
          className='bg-rgba-1 tablet:px-10 my-20 tablet:-mt-20 pb-6 rounded-lg text-center'>

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

          <div className='flex flex-wrap tablet:gap-12 gap-4'>
            <Project 
              title='Explorer Food' 
              link={'https://myfrontendfood.netlify.app'}
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

            <Project 
              title='Rocket Movie' 
              link={'https://movienote.netlify.app'}
              previewDesktop={'https://bit.ly/3NaXLJu'}
              previewMobile={'https://bit.ly/41Bbm10'}
              AOSanimation='zoom'
            />

            <Project 
              title='Em produção' 
              previewDesktop={bgInProduction}
              previewMobile={bgInProduction}
            />
          </div>

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

