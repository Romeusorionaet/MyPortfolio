import {CarouselStacks} from './CarouselStacks';

export function About() {

    return(
        <div
          className='relative p-10 tablet:p-0'>

          <div 
            data-aos="fade-right"
            className='z-10 bg-rgba-2 rounded-lg p-4 flex flex-col gap-4'>

            <p>
              Eu sou Romeu soares, tenho 24 anos e sou Web Developer Frontend júnior, com experiência nas principais ferramentas
              atual no mercado. Sou apaixonado pela área, e sempre estou em busca de novas oportunidades 
              para aprender e crescer.
            </p>

            <p>
              Resumindo sobre como consegui meus conhecimentos na área.
              Para estágio inícial da minha jornada concluí um curso de web design moderno
              com conceitos básicos sobre HTML, CSS e JavaScript. Após isso iniciei e 
              concluí com sucesso o programa Explorer da empresa de educação em tecnologia Rocketseat.
              Nela consegui definir meus objetivos e propósitos planejando minha trajetória. 
              Avancei meus conhecimentos nos conceitos básicos que me permitiu realizar projetos 
              mais complexos. Aprendi a montar e consumir uma API RESTful e utilizar banco de dados. 
              Tudo isso realizando projetos pessoais simulando o mercado.
            </p>

            <p>  
              Isso me permitiu encontrar soluções e aprender a utilizar novas ferramentas 
              atuais como por exemplo a utilização do TypeScript, Nextjs e Tailwindcss.
              E não paro por aqui, continuo aprendendo, me atualizando para está sempre apto a 
              novos desafios.
            </p>

          </div>

          <div className="absolute h-[526px] w-[526px] rounded-full bg-red-500 opacity-10 blur-3xl" />

        </div>
    )
}