import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import {useEffect, useState} from 'react';

export function AboutMe() {
    const [sliderDscription] = useKeenSlider({
        mode: "free-snap",
        slides: {
          perView: window.innerWidth > 800 ? 2 : 1.5,
          spacing: 10,
        },
        vertical: true,
      })

    // function typeWriter(element: string) {
    //     const textoArray = element.innerHTML.splite('')
    //     element.innerHTML = '';
    //     textoArray.forEach((letter: string, i: number)=>{
    //         setTimeout(()=> element.innerHTML += letter, 75 * i);
    //     });
    // }

    // console.log(text)
    // typeWriter(text)

    return(
        <div ref={sliderDscription} className="keen-slider text-justif h-25 tablet:h-36">
            <div 
                className="keen-slider__slide bg-BG-DESCRIPTION rounded-lg p-4 ">
                <p className='animate-[type]'>
                Eu sou [seu nome], [sua profissão/ocupação], com experiência em [áreas relevantes]. 
                Sou apaixonado por [seus interesses/hobbies], e sempre estou em busca de novas oportunidades 
                para aprender e crescer. Minhas habilidades incluem [suas habilidades relevantes].
                </p>
            </div>
            <div 
                className="keen-slider__slide bg-BG-DESCRIPTION shadow-lg rounded-lg p-4">
                <p>
                    kjlsbdhefrgiu isdeuhfrgi rhegiuerh g
                    kjlsbdhefrgiu isdeuhfrgi rhegiuerh g
                    kjlsbdhefrgiu isdeuhfrgi rhegiuerh g
                    kjlsbdhefrgiu isdeuhfrgi rhegiuerh g
                    kjlsbdhefrgiu isdeuhfrgi rhegiuerh g
                    kjlsbdhefrgiu isdeuhfrgi rhegiuerh g
                    
                </p>
            </div>
        </div>
    )
}