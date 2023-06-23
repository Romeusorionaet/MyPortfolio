import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from '@material-tailwind/react'

interface Props {
  id: number
  img: string
  previewImg?: string
  title: string
  description: string
}

export function PopoverInsignias({
  img,
  title,
  description,
  previewImg,
}: Props) {
  return (
    <Popover>
      <PopoverHandler>
        <Button>
          <img
            className="w-8 tablet:w-[150px] tablet:h-[150px] tablet:m-1 
                hover:shadow-xl hover:shadow-blue-900 hover:-translate-y-3.5 
                duration-300 rounded-3xl active:translate-y-[50px]"
            src={img}
            alt=""
          />
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-[15rem] h-[20rem] p-0 overflow-hidden border-4 flex border-blue-900/80">
        <div className="p-4 absolute top-0 z-10 h-full">
          <div className="flex flex-col justify-center gap-5 h-full text-sm">
            <Typography className="text-center">{title}</Typography>

            <Typography className="text-justify shadow-2xl">
              {description}
            </Typography>

            {/* <a href="#" className="inline-block">
              <Button className="flex items-center gap-1">
                Read More
                <ArrowLongRightIcon strokeWidth={2} className="w-3.5 h-3.5" />
              </Button>
            </a> */}
          </div>
        </div>
        <img
          src={previewImg}
          alt="image"
          className="w-full h-full object-cover blur-sm"
        />
      </PopoverContent>
    </Popover>
  )
}
