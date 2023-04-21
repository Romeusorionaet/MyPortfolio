import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {AboutMe} from '../components/AboutMe';
import {GitCard} from '../components/GitCard';
import {CarouselStacks} from '../components/CarouselStacks';
import {Project} from '../components/Project';

import romeuImg1 from '../assets/ImgProfiles/romeuImg1.png';

import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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

        <section className='h-44 flex items-center justify-center text-center text-3xl'>
          <p className='text-xl'>ROMEU SOARES <br/> DEVELOPER FRONTEND</p>
        </section>

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
          className='h-60 mt-5 mb-20 w-full flex justify-center items-center flex-col tablet:flex-row tablet:gap-40 tablet:pr-16 desktop:gap-80'>

          <div 
            data-aos="fade-right"
            className='w-20'>
            <AboutMe />
          </div>

          <div 
            className='mt-20 text-center tablet:-mt-20 active:bg-gradient-to-t from-indigo-400 rounded-full pt-6'>
            <h2 className='text-2xl mb-40'>STACKS PRINCIPAIS</h2>
            <CarouselStacks />
          </div>

        </section>

        <section 
          className='bg-BG-HEADER my-20 tablet:-mt-20 pb-6 rounded-lg w-60 text-center '>

          <div>
            <h2 className='text-2xl my-1'>Meus Projetos Principais</h2>

            <p>
              {githubRepos.length} repositório publico no github 
              <a className='text-zinc-300' href='#'> romeusoares</a>
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

