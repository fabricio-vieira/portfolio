import { Module } from '@nestjs/common'
import { ProjetoController } from './projeto.controller'
import { DbModule } from '../db/db.module'
import { ProjetoProvider } from './projeto.provider'
@Module({
    controllers: [ProjetoController],
    imports: [DbModule],
    providers: [ProjetoProvider],
})
export class ProjetoModule {}
