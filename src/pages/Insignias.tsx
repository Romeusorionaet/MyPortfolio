import sigNlwESports from '../assets/Insignias/sigNlwESports.png'
import sigNlweSportsTask from '../assets/Insignias/sigNlweSportsTask.png'
import sigNlwCopa from '../assets/Insignias/sigNlwCopa.png'
import sigDoWhile2022 from '../assets/Insignias/sigDoWhile2022.png'
import sigNlwSetup from '../assets/Insignias/sigNlwSetup.png'
import sigNlwSpaceTime from '../assets/Insignias/sigNlwSpaceTime.png'

import { HiArrowCircleLeft } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
// ver um jeito de exportar a pasta de imagens
const arrayInsignias = [
  sigNlwESports,
  sigNlweSportsTask,
  sigNlwCopa,
  sigDoWhile2022,
  sigNlwSetup,
  sigNlwSpaceTime,
]

export function Insignias() {
  return (
    <div>
      <div className="flex flex-1 justify-center items-center gap-5 w-full p-6">
        <NavLink to={'/'}>
          <HiArrowCircleLeft
            size={28}
            className="opacity-80 hover:opacity-100 duration-300"
          />
        </NavLink>
        <p>
          Minhas Insignías <span className="text-zinc-300">Rocketseat</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        {arrayInsignias.map((insignia) => {
          return (
            <div key={insignia}>
              <img
                className="w-[100px] h-[100px] tablet:w-[150px] tablet:h-[150px] m-1 
                hover:shadow-xl hover:shadow-blue-900 hover:-translate-y-3.5 
                duration-300 rounded-3xl active:translate-y-[100px]"
                src={insignia}
                alt=""
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
