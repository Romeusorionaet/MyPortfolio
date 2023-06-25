import { HiArrowCircleLeft } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { PopoverInsignias } from './components/PopoverInsignias'
import { arrayInsignias } from './components/InsigniasRocketseat'

import { motion } from 'framer-motion'

export function Insignias() {
  return (
    <motion.div
      className="pt-[4rem]"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-1 justify-center items-center gap-5 w-full p-6 fixed">
        <NavLink to={'/'}>
          <HiArrowCircleLeft
            size={28}
            className="opacity-80 hover:opacity-100 duration-300"
          />
        </NavLink>
        <p>
          Minhas Insignías{' '}
          <a
            href="https://www.rocketseat.com.br/"
            target="_blank"
            className="text-zinc-300"
            rel="noreferrer"
          >
            Rocketseat
          </a>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[4rem] pt-[10rem] tablet:mx-[10rem]">
        {arrayInsignias.map((insignia) => {
          return (
            <div className="h-10 flex justify-end" key={insignia.id}>
              <PopoverInsignias
                id={insignia.id}
                img={insignia.img}
                previewImg={insignia.previewImg}
                title={insignia.title}
                description={insignia.description}
              />
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
