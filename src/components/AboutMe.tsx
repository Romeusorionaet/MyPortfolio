import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export function AboutMe() {


    const [sliderDscription] = useKeenSlider({
        mode: "free-snap",
        slides: {
          perView: window.innerWidth > 800 ? 2 : 1.5,
          spacing: 10,
        },
        vertical: true,
      })

    return(
        <div ref={sliderDscription} className="keen-slider text-justif h-25 tablet:h-36">
            <div className="keen-slider__slide bg-BG-DESCRIPTION rounded-lg p-4 min-h-screen">
                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da 
                    indústria tipográfica e de impressos, e vem sendo utilizado 
                    desde o século XVI, quando um impressor desconhecido 
                    pegou uma bandeja de tipos e os embaralhou para fazer um livro de 
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, 
                    como também ao salto para a editoração eletrônica, permanecendo...
                </p>
            </div>
            <div className="keen-slider__slide bg-BG-DESCRIPTION shadow-lg rounded-lg p-4">
                <p>
                    Lorem Ipsum é simplesmente uma simulação de texto da 
                    indústria tipográfica e de impressos, e vem sendo utilizado 
                    desde o século XVI, quando um impressor desconhecido 
                    pegou uma bandeja de tipos e os embaralhou para fazer um livro de 
                    modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos...
                </p>
            </div>
        </div>
    )
}