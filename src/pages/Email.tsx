import { Header } from "../components/Header" ;
import { Footer } from "../components/Footer" ;
import {AiOutlineMail} from 'react-icons/ai';

export function Email() {

    return(
        <div className="bg-zinc-700 h-screen">
            <Header />

            <section 
                className="flex mt-2 pl-2 justify-center items-center gap-2 flex-col tablet:flex-row tablet:gap-8">
                <AiOutlineMail 
                className="text-9xl "
                />
                <a href="mailto:romeuindexjs9@gmail.com">
                    Clique aqui e envie um email
                </a>
            </section>

            <div className="absolute bottom-0 w-screen">
                <Footer />
            </div>
        </div>
    )
}