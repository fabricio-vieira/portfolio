import Mensagem from '../../model/Mensagem'
import ConteudoMD from '../shared/ConteudoMD'
import Image from 'next/image'

export interface BalaoMensagemProps {
    mensagem: Mensagem
    esconderAutor?: boolean
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
    return props.mensagem.lado === 'esquerdo' ? (
        <BalaoMensagemEsquerdoAssitente {...props} />
    ) : (
        <BalaoMensagemDireitoVisitante {...props} />
    )
}

function BalaoMensagemEsquerdoAssitente(props: BalaoMensagemProps) {
    return (
        <div className="flex gap-4">
            {!props.esconderAutor && <Image src="/chat.svg" alt="Assitente" width={40} height={40} />}

            <div className={`flex flex-col ${props.esconderAutor && 'pl-16'}`}>
                {!props.esconderAutor && <span className="test-xs text-zinc-600">{props.mensagem.autor}</span>}
                <div
                    className={`bg-zinc-900 text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl 
                    }`}
                >
                    <ConteudoMD markdown={props.mensagem.texto} />
                </div>
            </div>
        </div>
    )
}

function BalaoMensagemDireitoVisitante(props: BalaoMensagemProps) {
    return (
        <div className={`flex flex-col items-end ${props.esconderAutor && 'pr-1'}`}>
            {!props.esconderAutor && <span className="test-xs text-zinc-600">{props.mensagem.autor}</span>}
            <div className="bg-blue-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl ">
                <ConteudoMD markdown={props.mensagem.texto} />
            </div>
        </div>
    )
}

// Lado esquerdo: Assistente
// Lado direito: Visitante
