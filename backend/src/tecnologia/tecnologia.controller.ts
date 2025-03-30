import { Controller, Get } from '@nestjs/common'
import { TecnologiaProvider } from './tecnologia.provider'
import { Tecnologia } from '@core'

@Controller('tecnologias')
export class TecnologiaController {
    constructor(private readonly provider: TecnologiaProvider) {}

    @Get()
    async obterTodas(): Promise<Tecnologia[]> {
        return this.provider.obterTodas()
    }

    @Get('destaques')
    async obterDestaques(): Promise<Tecnologia[]> {
        return this.provider.obterDestaques()
    }
}
