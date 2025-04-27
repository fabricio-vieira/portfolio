import { Projeto, Tipo } from '@core'
import { httpGet } from '@/functions/api'

export async function obterProjetos() {
    const projetos: Projeto[] = await httpGet('/projetos')

    return {
        todos: projetos,
        get mobile() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.MOBILE)
        },
        get web() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.WEB)
        },
        get jogos() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.GAME)
        },
        get destaque() {
            return projetos.filter((projeto) => projeto.destaque)
        },
    }
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
    const projeto: Projeto = await httpGet(`/projetos/${id}`, {
        cache: 'no-store',
    })
    return projeto
}
