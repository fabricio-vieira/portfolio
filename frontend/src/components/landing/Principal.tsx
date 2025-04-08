import Cabecalho from '@/components/shared/Cabecalho'
import Tecnologias from '@/components/tecnologias/tecnologias'
import { Tecnologia } from '@core'

export interface PrincipalProps {
    tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
    return (
        <div
            className="
                    flex flex-col h-[500px]
                    bg-[url('/principal.jpg')] 
                    bg-cover bg-center justify-center
                   "
        >
            <Cabecalho />
            <div className="flex-1 flex w-full flex-col justify-center gap-4 items-center">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="flex gap-3 items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="text-3xl sm:text-5xl font-bold text-center">Fabricio Vieira</span>
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    </h1>
                    <h2 className="text-zinc-400 text-center">Gestor Porte Group CG</h2>
                </div>
                <Tecnologias lista={props.tecnologias} />
            </div>
        </div>
    )
}
