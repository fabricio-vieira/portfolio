'use client'
import { useState, useRef, useEffect } from 'react'
import useChat from '@/hooks/useChat'
import { IconReload, IconMessages, IconSend } from '@tabler/icons-react'
import Image from 'next/image'
import BalaoMensagem from './BalaoMensagem'

export default function JanelaChat() {
    const { mensagens, limparMensagens, pensando, adicionarMensagem } = useChat()
    const [texto, setTexto] = useState('')
    const fimChatRef = useRef<HTMLDivElement>(null)

    function enviarMensagem() {
        adicionarMensagem(texto)
        setTexto('')
    }

    useEffect(() => {
        if (fimChatRef.current) {
            fimChatRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [mensagens])

    return (
        <div className="flex flex-col bg-zinc-300 rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center bg-white p-4">
                <h2 className="text-xl text-black font-bold">Olá Visitante</h2>
                <IconReload size={24} className="text-black cursor-pointer" onClick={limparMensagens} />
            </div>
            {mensagens.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px]">
                    <IconMessages size={230} stroke={0.2} className="text-black/30" />
                    <span className="text-black/90 text-lg">Vamos conversar?</span>
                </div>
            ) : (
                <div className="flex flex-col p-2 gap-2 min-h-[400px] sm:min-h-[500px] max-h-[500px] sm:max-h-[400px] overflow-y-scroll">
                    {mensagens.map((mensagem, index) => {
                        const mesmoAutor = index > 0 && mensagens[index - 1].autor === mensagem.autor
                        return <BalaoMensagem key={mensagem.id} mensagem={mensagem} esconderAutor={mesmoAutor} />
                    })}
                    {pensando && (
                        <div className="mb-4">
                            <Image src="/pensando.gif" alt="Pensando" width={50} height={50} />
                        </div>
                    )}
                    <div ref={fimChatRef}></div>
                </div>
            )}
            <div className="h-px bg-zinc-400 mt-4" />
            <div className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white ">
                <input
                    className="flex-1 bg-transparent outline-none h-8 pl-3 text-black"
                    type="text"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            enviarMensagem()
                        }
                    }}
                />
                <button
                    className=" flex justify-center items-center bg-blue-500 rounded-full min-h-8 min-w-8"
                    onClick={enviarMensagem}
                >
                    <IconSend size={18} className="text-white cursor-pointer" />
                </button>
            </div>
        </div>
    )
}
