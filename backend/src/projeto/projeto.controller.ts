import { Controller, Get, Param } from '@nestjs/common'
import { ProjetoProvider } from './projeto.provider'
import { Projeto } from '@core'

@Controller('projetos')
export class ProjetoController {
    constructor(private readonly provider: ProjetoProvider) {}

    @Get()
    async obterTodos(): Promise<Projeto[]> {
        return this.provider.obterTodos()
    }

    @Get(':id')
    async obterPorId(@Param('id') id: string): Promise<Projeto> {
        return this.provider.obterPorId(Number(id))
    }
}
