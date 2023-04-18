import {AiOutlineMail} from 'react-icons/ai';
import {GiGears} from 'react-icons/gi';

export function Header(){
    return(
        <section 
            className="h-28  bg-BG-HEADER flex items-center pl-3 justify-between border-b border-COLOR-LINE">
            <div>
                <p>ROMEU SOARES DE SOUTO</p>
            </div>

            <nav className="pr-3 flex gap-5 font-DESCRIPTION text-2xl">
                <span>
                    <AiOutlineMail />
                </span>

                <span>
                    <GiGears />
                </span>
            </nav>
        </section>
    )
}