
interface Props {
    index: number;
}

export function GitCard({index}: Props){

    return(
        <div>
            {(index % 3 === 0) == true ?
             <div 
             className="w-10 h-10 bg-green-100 border-2 animate-ping border-white-800 rounded-lg opacity-20"
             >
             </div>
             :
             <div 
             className="w-10 h-10  bg-green-500 border-2 border-zinc-800 rounded-lg opacity-50"
             >
             </div>
            }
        </div>
    )
}