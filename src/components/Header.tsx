import {GiGears} from 'react-icons/gi';
import {useNavigate} from 'react-router-dom';

export function Header(){
    const navigate = useNavigate();

    return(
        <section 
            className="w-full bg-blue-900 flex items-center p-3 tablet:px-40 justify-between fixed top-0 z-20">
            <button 
            className='handle-button max-tablet:text-sm'
            onClick={()=>navigate('/')}
            >
                ROMEU SOARES DE SOUTO
            </button>

            <nav className=" flex gap-5 tablet:gap-16 font-DESCRIPTION text-2xl">
                <button 
                className='handle-button'
                onClick={()=>{navigate('/Gear')}}
                >
                    <GiGears />
                </button>
            </nav>
        </section>
    )
}