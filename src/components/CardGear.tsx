
interface PropsGear {
    image: string;
    title: string;
    description: string;
    link: string;
}

export function CardGear({image, title, description, link}: PropsGear) {

    return(
        <div className="mt-10 px-2 hover:bg-zinc-600 rounded-lg">

                <div className='h-10 flex justify-center pt-2'>
                    <a href={link} target='blank'>
                        <img 
                        className="h-10 rounded-lg"
                        src={image}  
                        alt='definir' 
                        />
                    </a>
                </div>

                <div className="mt-10 w-20 text-center">
                    <h2>{title}</h2>

                    <p className="my-1 px-1 h-4 overflow-auto scroll-smooth hover:scroll-auto">
                        {description}
                    </p>
                </div>

        </div>
    )
}