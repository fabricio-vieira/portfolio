'use client'
import { Id } from '@core'
import { useState } from 'react'
import useLocalStorage from './useLocalStorage'
import Mensagem from '@/model/Mensagem'
import conversarComAssistente from '@/functions/chat'

export default function useChat() {
    const [chatId] = useLocalStorage<string>('chatId', Id.generate())
    const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>('mensagens', [])
    const [pensando, setPensando] = useState(false)

    async function adicionarMensagem(texto: string) {
        try {
            setPensando(true)
            const novaMensagem: Mensagem = {
                id: Id.generate(),
                texto,
                autor: 'Visitante',
                lado: 'direito',
            }

            setMensagens((msgs) => [...msgs, novaMensagem])

            const resposta = await conversarComAssistente(chatId, novaMensagem)

            if (!resposta) return

            const mensagemResposta: Mensagem = {
                id: Id.generate(),
                texto: resposta,
                autor: 'Assistente',
                lado: 'esquerdo',
            }

            setMensagens((msgs) => [...msgs, mensagemResposta])
        } finally {
            setPensando(false)
        }
    }

    function limparMensagens() {
        setMensagens([])
    }

    return {
        chatId,
        mensagens,
        adicionarMensagem,
        limparMensagens,
        pensando,
    }
}
