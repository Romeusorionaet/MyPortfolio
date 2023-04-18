interface Props {
    description: string;
    file: string;
}

export function CreatStack({description, file}: Props) {

    return(
        <div 
          className='h-80 w-80 my-6 p-2 text-center rounded-lg relative text-white'>

            <div className="w-8 h-6 absolute -top-20 left-14 rounded-lg overflow-hidden">
                {/* pensar em botar a imagem como background dessa div */}
              <img 
              className="w-screen h-full"
              src={file} 
              alt='react logo' 
              />
            </div>

            <h3 className='mb-1 mt-4 text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_100%)]'>React</h3>

            <p className='h-40 text-justify text-zinc-900'>
              {description}
            </p>
            <a 
            className="[text-shadow:_0_2px_0_rgb(0_0_0_/_100%)]"
            href='#'>
                link
            </a>

            <hr/>
          </div> 
    )
}