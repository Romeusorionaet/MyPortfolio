
interface Props {
    index: number;
}

export function GitCard({index}: Props){

    return(
        <div>
            {(index % 3 === 0) == true ?
             <div 
             className="w-10 h-10bg-GIT-CARD2 border-2 animate-ping border-white-800 rounded-lg opacity-30"
             >
             </div>
             :
             <div 
             className="w-10 h-10  bg-GIT-CARD1 border-2 border-zinc-800 rounded-lg opacity-50"
             >
             </div>
            }
        </div>
    )
}