import Principal from '@/components/landing/Principal'
import Curriculo from '@/components/curriculo'
import Container from '@/components/shared/Container'
import Projetos from '@/components/projetos/Projetos'
import { obterTecnologias } from '@/functions/tecnologias'
import { obterProjetos } from '@/functions/projetos'

export default async function Home() {
    const tecnologias = await obterTecnologias()
    const projetos = await obterProjetos()

    return (
        <div>
            <Principal tecnologias={tecnologias.destaques} />

            <Container className="py-16 flex flex-col items-center gap-10">
                <Projetos titulo="Destaques" lista={projetos.destaque} />
                <Projetos titulo="Web" lista={projetos.web} />
                <Projetos titulo="Mobile" lista={projetos.mobile} />
                <Projetos titulo="Jogos" lista={projetos.jogos} />
                <Curriculo tecnologias={tecnologias.todas} />
            </Container>
        </div>
    )
}
