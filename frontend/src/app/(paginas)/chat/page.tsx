'use client'
import useChat from '@/hooks/useChat'
import { useState } from 'react'
import Image from 'next/image'

export default function ChatPage() {
    const { chatId, mensagens, adicionarMensagem, limparMensagens, pensando } = useChat()
    const [texto, setTexto] = useState('')

    return (
        <div>
            <h1>Chat</h1>
            <p>ChatId: {chatId}</p>
            <ul>
                {mensagens.map((mensagem) => (
                    <li key={mensagem.id} className=" flex gap-2">
                        <div>{mensagem.autor}</div>
                        <div>{mensagem.texto}</div>
                    </li>
                ))}
            </ul>

            <button onClick={limparMensagens}>Limpar</button>
            {pensando && (
                <div className="mb-4">
                    <Image src="/pensando.gif" alt="Pensando" width={50} height={50} />
                </div>
            )}
            <input
                className=" border border-gray-700 rounded p-2"
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        adicionarMensagem(texto)
                        setTexto('')
                    }
                }}
            />
        </div>
    )
}
