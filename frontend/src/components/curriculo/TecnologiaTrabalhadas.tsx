import { Tecnologia } from '@core'

export interface TecnologiasTrabalhadasProps {
    tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
    // Verifica se tecnologias existe e é um array
    if (!props.tecnologias || !Array.isArray(props.tecnologias)) {
        console.warn('TecnologiasTrabalhadas: props.tecnologias não é um array válido', props.tecnologias)
        return null
    }

    return (
        <div className="flex justify-center items-center bg-black border border-zinc-800 rounded-2xl p-6 w-full lg:w-72">
            <div className="flex flex-wrap gap-x-3 justify-center">
                {props.tecnologias.map((tecnologia) => (
                    <div key={tecnologia.id}>
                        <span className="text-red-500 font-bold">#</span>
                        <span>{tecnologia.nome}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
