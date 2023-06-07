interface PropsStack {
  description: string
  file: string
  link: string
  title: string
}

export function CreatStack({ description, file, link, title }: PropsStack) {
  return (
    <div className="h-80 w-80 my-6 p-2 text-center rounded-lg relative text-white">
      <div
        data-aos="zoom-in-up"
        className="w-8 h-6 absolute -top-20 left-14 rounded-lg overflow-hidden"
      >
        <img className="w-screen h-full" src={file} alt="react logo" />
      </div>

      <h3 className="mb-1 mt-2 text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_100%)]">
        {title}
      </h3>

      <div className=" h-9 mb-4">
        <p className="h-40 text-justify text-sm text-gradient">{description}</p>
      </div>
      <a
        className="shadow-lg border-b-2 border-blue-600"
        href={link}
        target="blank"
      >
        Documentation
      </a>
    </div>
  )
}
