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
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderStacks}>
            
            <div className="carousel__cell card ">
              <CreatStack
                file={reactLogo}
                description='
                  Lorem Ipsum é simplesmente uma simulação de texto da 
                  indústria tipográfica e de impressos, e vem sendo utilizado 
                  desde o século XVI' 
              />
            </div>
            
            <div className="carousel__cell card ">
              <CreatStack
                file={typescriptLogo}
                description='
                  Lorem Ipsum é simplesmente uma simulação de texto da 
                  indústria tipográfica e de impressos, e vem sendo utilizado 
                  desde o século XVI' 
              />
            </div>
            
            <div className="carousel__cell card ">
              <CreatStack
                file={javascriptLogo}
                description='
                  Lorem Ipsum é simplesmente uma simulação de texto da 
                  indústria tipográfica e de impressos, e vem sendo utilizado 
                  desde o século XVI' 
              />
            </div>
            
            <div className="carousel__cell card ">
              <CreatStack
                file={htmlLogo}
                description='
                  Lorem Ipsum é simplesmente uma simulação de texto da 
                  indústria tipográfica e de impressos, e vem sendo utilizado 
                  desde o século XVI' 
              />
            </div>

            <div className="carousel__cell card ">
              <CreatStack
                file={cssLogo}
                description='
                  Lorem Ipsum é simplesmente uma simulação de texto da 
                  indústria tipográfica e de impressos, e vem sendo utilizado 
                  desde o século XVI' 
              />
            </div>

            <div className="carousel__cell card ">
              <CreatStack
                file={tailwindcss}
                description='
                  Lorem Ipsum é simplesmente uma simulação de texto da 
                  indústria tipográfica e de impressos, e vem sendo utilizado 
                  desde o século XVI' 
              />
            </div>

          </div>
        </div>
      </div>
    )
}