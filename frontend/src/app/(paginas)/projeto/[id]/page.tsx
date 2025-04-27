import Cabecalho from '@/components/shared/Cabecalho'
import Container from '@/components/shared/Container'
import { obterProjeto } from '@/functions/projetos'
import CarrosselImagens from '@/components/shared/CarrosselImagens'
import Tecnologias from '@/components/tecnologias/tecnologias'
import { obterReadme } from '@/functions/github'
import Readme from '@/components/projetos/Readme'

// Configuração de revalidate em segundos (3600 = 1 hora)
export const revalidate = 300

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params
    const projeto = await obterProjeto(id)

    if (!projeto) return null

    const readme = await obterReadme(projeto.repositorio)

    return (
        <div className="bg-black">
            <Cabecalho />
            <Container className="flex flex-col items-center gap-6 py-10">
                <h1 className="text-3xl self-start font-bold">{projeto.nome}</h1>
                <CarrosselImagens imagens={projeto.imagens.slice(0)} />
                <Tecnologias lista={projeto.tecnologias} tamanhoMenor />
                <Readme markdown={readme} />
            </Container>
        </div>
    )
}

// COLOCAR PAGINA COMO ASINCRONA PARA QUE ELA RODE DO LADO DO SERVIDOR
