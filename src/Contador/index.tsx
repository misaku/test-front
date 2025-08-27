import {useEffect, useState} from "react";

interface ContadorProps {
    title: string;
}

export const Contador: React.FC<React.PropsWithChildren<ContadorProps>> = ({title, children}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        console.log("Contador Inicar/Montar")
        return ()=>{
            console.log("Contador Desmontar/Fechar")
        }
    },[])

    useEffect(()=>{
        console.log("Contador Atualizou")
    })

    useEffect(()=>{
        console.log("Atualizou Contador 1", {count})
        return ()=>{
            console.log("Atualizou Contador 1b /desmontar", {count})
        }
    },[count])

    const addCount1 = ()=>setCount(count+1)
    const addCount2 = ()=>setCount2(count2+2)
    const removeCount1 = ()=>setCount(count-1)
    const removeCount2 = ()=>setCount2(count2-2)


    return (
        <div>
            Contador {title}
            <ul>
                <li><button onClick={removeCount1}>-</button>1: {count}<button onClick={addCount1}>+</button></li>
                <li><button onClick={removeCount2}>-</button>2: {count2}<button onClick={addCount2}>+</button></li>
            </ul>
            {children}
        </div>
    )
}
