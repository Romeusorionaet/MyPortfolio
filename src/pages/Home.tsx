import {Header} from '../components/Header';
import {AboutMe} from '../components/AboutMe';
import {GitCard} from '../components/GitCard';
import {CarouselStacks} from '../components/CarouselStacks';
import romeuImg1 from '../assets/ImgProfiles/romeuImg1.png';

export function Home() {
  const gitCardLength = Array.from({length: 110}).sort()

  return (
    <section className="min-h-screen bg-gradient-to-t from-blue-600 to-zinc-900 text-TEXT-COLOR-900">

      <Header />

      <main className='flex flex-col items-center overflow-hidden'>

        <section className='h-44 flex items-center justify-center text-center text-3xl'>
          {/* 
          *Aqui vai ser uma imagem com esse mesmo nome abaixo, criar no canvas.
          *a imagem irá crescer junto com o tamanho do container
          */}
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

        <section className='mt-10 mx-3.5 p-5 max-w-full'>
          <AboutMe />
        </section>

        <section className='mx-2 my-5 w-full flex items-center justify-between flex-col h-25'>

          <h2 className='text-2xl'>STACKS PRINCIPAIS</h2>

          <CarouselStacks />

        </section>

      </main>

    </section>
  )
}

