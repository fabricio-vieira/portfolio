import { Injectable } from '@nestjs/common'
import { PrismaProvider } from '../db/prisma.provider'
import { Tecnologia } from '@core'

@Injectable()
export class TecnologiaProvider {
    constructor(private readonly repo: PrismaProvider) {}

    async obterTodas(): Promise<Tecnologia[]> {
        return this.repo.tecnologia.findMany()
    }

    async obterDestaques(): Promise<Tecnologia[]> {
        return this.repo.tecnologia.findMany({
            where: {
                destaque: true,
            },
        })
    }
}
