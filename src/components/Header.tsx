import EmailIcon from '../assets/email-file-svgrepo-com.svg';
import GearsSetUpIcon from '../assets/gears-setup-svgrepo-com.svg';

export function Header(){
    return(
        <section 
            className="h-28 bg-BG-HEADER flex items-center pl-10 justify-between border-b border-COLOR-LINE">
            <div>
                ROMEU SOARES DE SOUTO
            </div>

            <nav className="pr-10 flex gap-8 font-DESCRIPTION">
                <span className='w-10'>
                    <img src={EmailIcon} title="icon e-mail" />
                </span>

                <span className='w-10'>
                    <img src={GearsSetUpIcon} title="icon setup" />
                </span>
            </nav>
        </section>
    )
}