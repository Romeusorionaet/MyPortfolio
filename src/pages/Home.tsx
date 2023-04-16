import {Header} from '../components/Header';
import {GitCard} from '../components/GitCard';
import romeuImg1 from '../assets/ImgProfiles/romeuImg1.png';

export function Home() {
  const gitCardLength = Array.from({length: 110}).sort()

  return (
    <section className="min-h-screen bg-BG-HOME text-TEXT-COLOR-900">

      <Header />

      <main className='flex flex-col items-center'>

        <section className='h-64 mx-3 flex items-center justify-center text-center text-3xl'>
          {/* 
          *Aqui vai ser uma imagem com esse mesmo nome abaixo, criar no canvas.
          *a imagem irá crescer junto com o tamanho do container
          */}
          <p>ROMEU SOARES <br/> DEVELOPER FRONTEND</p>
        </section>

        <section 
          className="flex gap-1 justify-center w-BG-GITHUB-W h-BG-GITHUB-H flex-wrap overflow-hidden mx-5 pt-2 bg-BG-IMG rounded-full">
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
          {/* a largura do container de imagem seguir o alinhamento do nome logo a cima */}
          <div 
          className='h-74 w-80 overflow-hidden flex justify-center absolute'>
            {/* aqui usar a ferramenta de slider */}
            {/* 
            *mostrar apenas fotos recortadas 
             */}
             <img 
             className='-m-24 '
             src={romeuImg1} 
             alt='Romeu soares' 
             />
          </div>
        </section>

        <section className=' mt-10 p-5'>
          {/* aqui fica a parte onde eu deixo descrição sobre mim */}

          <h2 className='text-3xl'>Sobre:</h2>

          <div>

             <ul className='flex flex-col gap-8 text-justify'>
              <li className='bg-zinc-700 rounded-lg p-1'>
                <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
                  quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                  Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. 
                </p>
              </li>
              <li className='bg-zinc-700 rounded-lg p-1'>
                <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
                  quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                  Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. 
                </p>
              </li>
              <li className='bg-zinc-700 rounded-lg p-1'>
                <p>
                  Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
                  quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
                  e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                </p>
              </li>
             </ul>

          </div>
        </section>

      </main>

    </section>
  )
}

