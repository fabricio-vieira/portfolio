import ConteudoMD from '../shared/ConteudoMD'

interface ReadmeProps {
    markdown: string
}

export default function Readme(props: ReadmeProps) {
    return (
        <div className="flex flex-col items-stretch p-6 bg-blac border border-zinc-800">
            <div className="prose prose-zinc prose-invert" style={{ maxWidth: '100%' }}>
                <ConteudoMD markdown={props.markdown} />
            </div>
        </div>
    )
}

// Criada um class "data-badges" para facilitar a estilização dos icones das tecnologias do projeto no markdown
// add um seletor no globalcss para identificar se ha a propriedade "data-bages" na div para então aplicar o estilo
