
interface PropsGear {
    image: string;
    title: string;
    description: string;
    link: string;
}

export function CardGear({image, title, description, link}: PropsGear) {

    return(
        <div className="mt-10 px-2 bg-BG-HEADER rounded-lg">

                <div className='h-10 flex justify-center pt-2'>
                    <a href={link} target='blank'>
                        <img 
                        className="h-10"
                        src={image}  
                        alt='definir' 
                        />
                    </a>
                </div>

                <div className="mt-10 w-20 text-center">
                    <h2>{title}</h2>

                    <p className="my-1 px-1">
                        {description}
                    </p>
                </div>

        </div>
    )
}