import Cabecalho from '@/components/shared/Cabecalho'

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    console.log(props.params)
    const { id } = await props.params
    return (
        <div className="bg-black">
            <Cabecalho />
            <div>Projeto - {id}</div>
        </div>
    )
}

// COLOCAR PAGINA COMO ASINCRONA PARA QUE ELA RODE DO LADO DO SERVIDOR
