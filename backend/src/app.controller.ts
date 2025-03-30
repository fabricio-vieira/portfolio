import { Controller, Get } from '@nestjs/common'
import { Id } from '@core'

@Controller()
export class AppController {
    @Get()
    ping(): string {
        return `pong in ...${Id.generate()}`
    }
}
