'use server'

import Mensagem from '@/model/Mensagem'

export default async function conversarComAssistente(chatId: string, mensagem: Mensagem): Promise<string | null> {
    const webhookUrl = process.env.CHAT_WEBHOOK
    if (!webhookUrl) {
        console.error('URL do webhook não configurada')
        return null
    }

    try {
        const resposta = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatId,
                mensagem: mensagem.texto,
            }),
        })

        if (!resposta.ok) {
            console.error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`)
            return null
        }

        const msg = await resposta.json()

        if (!msg || typeof msg.resposta !== 'string') {
            console.error('Resposta inválida da API:', msg)
            return null
        }

        return msg.resposta
    } catch (error) {
        console.error('Erro ao conversar com o assistente:', error)
        return null
    }
}
