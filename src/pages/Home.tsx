import {Header} from '../components/Header';
import {AboutMe} from '../components/AboutMe';
import {GitCard} from '../components/GitCard';
import {CarouselStacks} from '../components/CarouselStacks';
import romeuImg1 from '../assets/ImgProfiles/romeuImg1.png';
import { useEffect, useState } from 'react';

export function Home() {
  const [githubRepos, setGithubRepos] = useState([])
  
  const gitCardLength = Array.from({length: 110});

  useEffect(()=>{
    async function fetchGIthub(){
      await fetch('https://api.github.com/users/Romeusorionaet/repos')
      .then(response => response.json())
      .then(data => setGithubRepos(data))
    }
    fetchGIthub()
  },[])
  

  return (
    <section className="min-h-screen text-TEXT-COLOR-900">

      <Header />

      <main className='flex flex-col items-center overflow-hidden'>

        <section className='h-44 flex items-center justify-center text-center text-3xl'>
          <p className='text-xl'>ROMEU SOARES <br/> DEVELOPER FRONTEND</p>
        </section>

        <section 
          className="flex justify-center w-40 h-31 flex-wrap overflow-hidden pt-2 rounded-full">
          {
            gitCardLength.map((item, index)=>{
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

        <section className='h-60 mt-5 mb-20 w-full flex justify-center items-center flex-col tablet:flex-row tablet:gap-40 tablet:pr-16'>

          <div className='w-20'>
            <AboutMe />
          </div>

          <div className='mt-20 text-center tablet:-mt-20'>
            <h2 className='text-2xl mb-40'>STACKS PRINCIPAIS</h2>
            <CarouselStacks />
          </div>

        </section>

        <section className='bg-BG-HEADER my-20 px-2 pb-2 rounded-lg'>

          <div className='text-center'>
            <h2 className='text-2xl mb-1'>Meus Projetos Principais</h2>

            <p>
              {githubRepos.length} repositório publico no github 
              <span className='text-zinc-300'>romeusoares</span>
            </p>
          </div>

          <div className='bg-BG-DESCRIPTION h-25 rounded-lg mt-10'>

          </div>
        </section>

      </main>

    </section>
  )
}

