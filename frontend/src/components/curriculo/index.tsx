import { Tecnologia } from '@core'
import TecnologiasTrabalhadas from './TecnologiaTrabalhadas'

export interface CurriculoProps {
    tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
    console.log('Curriculo - tecnologias:', props.tecnologias)
    return (
        <div>
            <TecnologiasTrabalhadas tecnologias={props.tecnologias} />
        </div>
    )
}
