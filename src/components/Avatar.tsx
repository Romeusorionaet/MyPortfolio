import romeuImg1 from '../assets/ImgProfiles/romeuImg1.png'
import Typing from 'react-typing-animation'

export function Avatar() {
  return (
    <section className="flex flex-col gap-5 h-full max-tablet:w-[14rem] tablet:min-w-[15rem]">
      <img
        className="object-cover tablet:min-w-20 rounded-full"
        src={romeuImg1}
        alt="Romeu soares"
      />
      <div className="h-6">
        <Typing>
          <Typing.Backspace count={20} />
          <h1 className="text-xl text-center">
            ROMEU SOARES <br /> DEVELOPER FRONTEND
          </h1>
        </Typing>
      </div>
    </section>
  )
}
