import { Injectable } from '@nestjs/common'
import { PrismaProvider } from '../db/prisma.provider'
import { Projeto } from '@core'

@Injectable()
export class ProjetoProvider {
    constructor(private readonly repo: PrismaProvider) {}

    async obterTodos(): Promise<Projeto[]> {
        return this.repo.projeto.findMany() as any
    }

    async obterPorId(id: number): Promise<Projeto | null> {
        return this.repo.projeto.findUnique({
            where: { id },
            include: {
                tecnologias: {
                    select: { id: true, nome: true, destaque: true },
                },
            },
        }) as any
    }
}
