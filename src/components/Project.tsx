interface PropsProject {
  previewDesktop: string
  previewMobile: string
  title: string
  link?: string
  AOSanimation?: string
}

export function Project({
  previewDesktop,
  previewMobile,
  title,
  link,
  AOSanimation,
}: PropsProject) {
  const isInProduction = AOSanimation
    ? 'p-2 rounded-full shadow-lg text-sm border-b-2 active:border-green-400 opacity-80 hover:opacity-100 duration-300'
    : 'p-2 rounded-full border-b-2 border-red-500 opacity-90 cursor-not-allowed'

  return (
    <div className="bg-gradient-to-r from-blue-800 rounded-3xl mt-10 w-30 mx-auto pb-2">
      <div className="h-15 p-1 pb-2 relative bg-gradient-to-l from-blue-500 rounded-3xl">
        <img
          className="rounded-3xl h-full w-full bg-no-repeat"
          src={previewDesktop}
          alt="projeto preview desktop"
        />

        <div
          data-aos={AOSanimation}
          className="w-6 h-10 absolute bottom-0 -right-6 bg-MOBILE-PREVIEW bg-cover bg-no-repeat bg-center flex"
        >
          <img
            className="w-4.6 h-8.5 m-auto"
            src={previewMobile}
            alt="projeto preview mobile"
          />
        </div>
      </div>

      <button className={isInProduction}>
        <a href={link} target="blank">
          {title}
        </a>
      </button>
    </div>
  )
}
