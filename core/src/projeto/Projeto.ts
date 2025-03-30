import { Tipo } from './Tipo'
import { Nivel } from './Nivel'
import Tecnologia from '../tecnologia/Tecnologia'

export default interface Projeto {
    id: string
    nome: string
    descricao: string
    imagens: string[]
    nivel: Nivel
    tipo: Tipo
    destaque: boolean
    repositorio: string
    tecnologias: Tecnologia[]
}
