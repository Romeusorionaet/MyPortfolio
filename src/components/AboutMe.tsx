import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

export function AboutMe() {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
          perView: 1.5,
          spacing: 20,
        },
      })

    return(
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide bg-BG-DESCRIPTION rounded-lg p-4">
                <p className='text-justify font-DESCRIPTION'>
                    Lorem Ipsum é simplesmente uma simulação de texto da 
                    indústria tipográfica e de impressos, e vem sendo utilizado 
                    desde o século XVI, quando um impressor desconhecido 
                    pegou uma bandeja de tipos e os embaralhou para fazer um livro de 
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, 
                    como também ao salto para a editoração eletrônica, permanecendo 
                    
                </p>
            </div>
            <div className="keen-slider__slide bg-BG-DESCRIPTION rounded-lg p-4">
                <p className='text-justify font-DESCRIPTION'>
                    Lorem Ipsum é simplesmente uma simulação de texto da 
                    indústria tipográfica e de impressos, e vem sendo utilizado 
                    desde o século XVI, quando um impressor desconhecido 
                    pegou uma bandeja de tipos e os embaralhou para fazer um livro de 
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, 
                </p>
            </div>
        </div>
    )
}