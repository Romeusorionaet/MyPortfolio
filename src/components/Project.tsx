interface PropsProject {
  previewDesktop: string;
  previewMobile: string;
  title: string;
  link: string;
  AOSanimation: string;
}

export function Project({previewDesktop, previewMobile, title, link, AOSanimation}: PropsProject) {

    return(
        <div 
            className='bg-BG-DESCRIPTION rounded-3xl mt-10 w-20 mx-auto pb-2'>

            <div className='h-15 p-4 relative'>

              <img 
                className='rounded-3xl h-full' 
                src={previewDesktop} 
                alt='projeto preview desktop' 
                />

              <div 
                data-aos={AOSanimation}
                className="w-6 h-10 absolute bottom-0 -right-2 bg-MOBILE-PREVIEW bg-cover bg-no-repeat bg-center flex"
              >
                 <img 
                  className=' w-4.3 h-8 m-auto ' 
                  src={previewMobile} 
                  alt='projeto preview mobile' 
                  />
              </div>

            </div>

            <button 
            className="rounded-full w-8 shadow-lg border-t-2 hover:border-black delay-200 active:border-green-400">
              <a href={link} target="blank">{title}</a>
            </button>
        </div>
    )
}