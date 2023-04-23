import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/styleCarouselStacks.css";

import {CreatStack} from '../components/CreatStack';

import reactLogo from '../assets/stacks/reactLogo.png';
import typescriptLogo from '../assets/stacks/typeScriptLogo.svg';
import javascriptLogo from '../assets/stacks/javascriptLogo.png';
import htmlLogo from '../assets/stacks/htmlLogo.png';
import cssLogo from '../assets/stacks/cssLogo.png';
import tailwindcss from '../assets/stacks/tailwindcssLogo.svg';

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export function CarouselStacks() {

    const [sliderStacks] = useKeenSlider<HTMLDivElement>(
      {
        loop: true,
        selector: ".carousel__cell",
        renderMode: "custom",
        mode: "free-snap",
      },
      [carousel]
    )

    return(
      <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        className="wrapper"
      >
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderStacks}>
            
            <div className="carousel__cell card ">
              <CreatStack
                title={'React'}
                link={'https://react.dev/'}
                file={reactLogo}
                description='
                React é uma biblioteca JavaScript para construir interfaces de usuário reativas e escaláveis. 
                É amplamente utilizado na criação de aplicações web modernas, com componentes e atualização eficiente do DOM.' 
              />
            </div>
            
            <div className="carousel__cell card ">
              <CreatStack
                title={'Typescript'}
                link={'https://www.typescriptlang.org/docs/'}
                file={typescriptLogo}
                description='
                TypeScript é uma linguagem de programação de código aberto que se baseia em 
                JavaScript e adiciona recursos de tipagem estática e outros recursos avançados, 
                como interfaces e classes.' 
              />
            </div>
            
            <div className="carousel__cell card ">
              <CreatStack
              title={'Javascript'}
                link={'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'}
                file={javascriptLogo}
                description='
                JavaScript é uma linguagem de programação de alto nível que permite a criação de páginas web 
                dinâmicas e interativas. É amplamente utilizado tanto no lado do cliente quanto do servidor.' 
              />
            </div>
            
            <div className="carousel__cell card ">
              <CreatStack
              title={'HTML'}
                link={'https://developer.mozilla.org/pt-BR/docs/Web/HTML'}
                file={htmlLogo}
                description='
                HTML é uma linguagem de marcação usada para criar páginas web, permitindo a estruturação do 
                conteúdo e a inclusão de elementos como imagens, links e formulários. É a base da web moderna.' 
              />
            </div>

            <div className="carousel__cell card ">
              <CreatStack
              title={'CSS'}
                link={'https://developer.mozilla.org/pt-BR/docs/Web/CSS'}
                file={cssLogo}
                description='
                CSS é uma linguagem de estilo usada para definir o layout, aparência e comportamento 
                visual de elementos em uma página web. É usado em conjunto com HTML e JavaScript para 
                criar interfaces de usuário responsivas.' 
              />
            </div>

            <div className="carousel__cell card ">
              <CreatStack
              title={'Tailwindcss'}
                link={'https://tailwindcss.com/'}
                file={tailwindcss}
                description='
                Tailwind CSS é uma biblioteca de classes CSS pré-definidas que permite a criação de 
                estilos de página web de forma rápida e consistente. É conhecido por sua abordagem de 
                "utilitários" e sua facilidade de uso.' 
              />
            </div>

          </div>
        </div>
      </div>
    )
}