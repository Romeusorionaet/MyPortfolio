import { Project } from '../../components/Project'
import bgInProduction from '../../assets/bg-InProduction.jpg'

export function FullProjects() {
  return (
    <div className="flex justify-center items-center overflow-hidden pb-8">
      <div className="flex flex-wrap tablet:gap-4 pt-[6rem] text-end">
        <Project
          title="Explorer Food"
          link={'https://myfrontendfood.netlify.app'}
          previewDesktop={'https://bit.ly/3Ll6Ga0'}
          previewMobile={'https://bit.ly/3ApRiCF'}
          AOSanimation="zoom-in-left"
        />

        <Project
          title="Find a Friend"
          link={'https://gccfindafriend.netlify.app'}
          previewDesktop={'https://bit.ly/3LelSFM'}
          previewMobile={'https://bit.ly/3LriNT3'}
          AOSanimation="flip-right"
        />

        <Project
          title="Rocket Movie"
          link={'https://movienote.netlify.app'}
          previewDesktop={'https://bit.ly/3NaXLJu'}
          previewMobile={'https://bit.ly/41Bbm10'}
          AOSanimation="zoom"
        />

        <Project
          title="Todo List"
          link={'https://todo-list-murex-iota.vercel.app'}
          previewDesktop={'https://bit.ly/3WDxnL2'}
          previewMobile={'https://bit.ly/3MZeb7b'}
          AOSanimation="zoom-in-left"
        />

        <Project
          title="Yougioh Cards pro"
          link={'https://yougioh-card-pro.vercel.app'}
          previewDesktop={'https://bit.ly/3IYBiwr'}
          previewMobile={'https://bit.ly/42qWd1R'}
          AOSanimation="zoom-in-left"
        />

        <Project
          title="Coffe Delivery"
          link={'https://coffee-delivery-amber-phi.vercel.app'}
          previewDesktop={'https://bit.ly/43UDqO9'}
          previewMobile={'https://bit.ly/46isknG'}
          AOSanimation="zoom"
        />

        <Project
          title="Em produção"
          previewDesktop={bgInProduction}
          previewMobile={bgInProduction}
        />
      </div>
    </div>
  )
}
