import {
    AiFillGithub, 
    AiFillLinkedin, 
    AiOutlineInstagram, 
    AiOutlineWhatsApp
} from 'react-icons/ai';

export function Footer() {

    return(
        <div className="bg-BG-HEADER h-28 flex items-center place-content-center">
            <nav>
                <ul className='flex gap-16 text-3xl'>
                    <li className='iconsFooter'><AiFillGithub /></li>
                    <li className='iconsFooter'><AiFillLinkedin /></li>
                    <li className='iconsFooter'><AiOutlineInstagram /></li>
                    <li className='iconsFooter'><AiOutlineWhatsApp /></li>
                </ul>
            </nav>
        </div>
    )
}