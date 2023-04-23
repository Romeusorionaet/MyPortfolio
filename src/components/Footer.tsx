import {
    AiFillGithub, 
    AiFillLinkedin, 
    AiOutlineInstagram, 
    AiOutlineWhatsApp
} from 'react-icons/ai';

export function Footer() {

    return(
        <div className="bg-blue-700 h-28 flex items-center place-content-center">
            <nav>
                <ul className='flex gap-16 text-3xl'>
                    <li className='iconsFooter'><a href='https://github.com/Romeusorionaet' target='blank'><AiFillGithub /></a></li>
                    <li className='iconsFooter'><a href='https://www.linkedin.com/in/romeu-soares-87749a231/' target='blank'><AiFillLinkedin /></a></li>
                    <li className='iconsFooter'><a href='https://www.instagram.com/romeusoaresdesouto/' target='blank'><AiOutlineInstagram /></a></li>
                    <li className='iconsFooter'><a href='https://wa.me/5584981127596' target='blank'><AiOutlineWhatsApp /></a></li>
                </ul>
            </nav>
        </div>
    )
}